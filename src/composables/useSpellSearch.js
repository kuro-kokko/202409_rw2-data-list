import { ref, computed, watch } from "vue";
import { spells } from "@/data/spell";
import { upgrades } from "@/data/upgrades";

export function useSpellSearch() {
  const expandedSpells = ref({});
  const searchQuery = ref("");
  const includeUpgrades = ref(false);
  const selectedTypes = ref([]);

  const filteredData = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    if (query === "" && selectedTypes.value.length === 0) {
      return spells;
    }

    return spells.filter((spell) => {
      const spellMatch =
        (query === "" ||
          spell.name.toLowerCase().includes(query) ||
          spell.text.toLowerCase().includes(query)) &&
        (selectedTypes.value.length === 0 ||
          selectedTypes.value.every((type) => spell.type.includes(type)));

      let upgradeMatch = false;
      if (includeUpgrades.value) {
        const matchedUpgrades = upgrades
          .filter((upgrade) => upgrade.id === spell.id)
          .filter((upgrade) => {
            const textMatch =
              query === "" ||
              upgrade.name.toLowerCase().includes(query) ||
              upgrade.text.toLowerCase().includes(query);
            const typeMatch =
              selectedTypes.value.length === 0 ||
              selectedTypes.value.every(
                (type) =>
                  upgrade.exType.includes(type) || spell.type.includes(type)
              );
            return textMatch && typeMatch;
          });
        upgradeMatch = matchedUpgrades.length > 0;
      }

      // Auto-expand logic
      if (includeUpgrades.value && (spellMatch || upgradeMatch)) {
        expandedSpells.value[spell.id] = true;
      } else {
        expandedSpells.value[spell.id] = false;
      }

      return spellMatch || (includeUpgrades.value && upgradeMatch);
    });
  });

  const isUpgradeExpanded = (spellId) => {
    return expandedSpells.value[spellId] || false;
  };

  const toggleUpgrades = (spellId) => {
    expandedSpells.value[spellId] = !expandedSpells.value[spellId];
  };

  const getUpgradesCount = (spellId) => {
    return upgrades.filter((upgrade) => upgrade.id === spellId).length;
  };

  const getSortedUpgrades = (spellId) => {
    return upgrades
      .filter((upgrade) => upgrade.id === spellId)
      .sort((a, b) => a.subId - b.subId);
  };

  const toggleType = (type) => {
    const index = selectedTypes.value.indexOf(type);
    if (index === -1) {
      selectedTypes.value.push(type);
    } else {
      selectedTypes.value.splice(index, 1);
    }
  };

  const autoExpandUpgrades = () => {
    if (searchQuery.value.trim() === "" && selectedTypes.value.length === 0) {
      Object.keys(expandedSpells.value).forEach((key) => {
        expandedSpells.value[key] = false;
      });
      return;
    }

    spells.forEach((spell) => {
      const spellMatch =
        (searchQuery.value.trim() === "" ||
          spell.name
            .toLowerCase()
            .includes(searchQuery.value.trim().toLowerCase()) ||
          spell.text
            .toLowerCase()
            .includes(searchQuery.value.trim().toLowerCase())) &&
        (selectedTypes.value.length === 0 ||
          selectedTypes.value.every((type) => spell.type.includes(type)));

      let upgradeMatch = false;
      if (includeUpgrades.value) {
        upgradeMatch = upgrades
          .filter((upgrade) => upgrade.id === spell.id)
          .some((upgrade) => {
            const textMatch =
              searchQuery.value.trim() === "" ||
              upgrade.name
                .toLowerCase()
                .includes(searchQuery.value.trim().toLowerCase()) ||
              upgrade.text
                .toLowerCase()
                .includes(searchQuery.value.trim().toLowerCase());
            const typeMatch =
              selectedTypes.value.length === 0 ||
              selectedTypes.value.every(
                (type) =>
                  upgrade.exType.includes(type) || spell.type.includes(type)
              );
            return textMatch && typeMatch;
          });
      }

      expandedSpells.value[spell.id] =
        includeUpgrades.value && (spellMatch || upgradeMatch);
    });
  };

  watch([searchQuery, includeUpgrades, selectedTypes], autoExpandUpgrades);

  return {
    searchQuery,
    includeUpgrades,
    filteredData,
    isUpgradeExpanded,
    toggleUpgrades,
    getUpgradesCount,
    getSortedUpgrades,
    selectedTypes,
    toggleType,
  };
}
