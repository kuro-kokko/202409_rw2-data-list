<template>
  <div class="search-app">
    <header class="header">
      <div class="search-container">
        <div class="toggle-buttons">
          <button class="toggle-button" @click="toggleSearch">
            Freeword {{ isSearchVisible ? '▲' : '▼' }}
          </button>
          <button class="toggle-button" @click="toggleTypes">
            Type {{ isTypesVisible ? '▲' : '▼' }}
          </button>
          <button class="clear-button" @click="clearSearch" :disabled="!hasSearchCriteria">
            Clear
          </button>
        </div>
        <div v-if="isSearchVisible" class="row search-inner">
          <div class="col-12 col-md-9">
            <input
              id="textSearch"
              v-model="searchQuery"
              class="form-control"
              placeholder="Search..."
            />
          </div>
          <div v-if="!isSkillListComputed" class="col-12 col-md-3">
            <div class="form-check form-switch ms-3">
              <input class="form-check-input" type="checkbox" id="includeUpgrades" v-model="includeUpgrades">
              <label class="form-check-label text-nowrap" for="includeUpgrades">Include Upgrades</label>
            </div>
          </div>
        </div>
        <div v-if="isTypesVisible" class="type-buttons">
          <button
            v-for="type in types"
            :key="type"
            class="type-button"
            :class="{ active: selectedTypes.includes(type), [type.toLowerCase()]: true }"
            @click="toggleType(type)"
          >
            {{ type }}
          </button>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="d-flex flex-column align-items-center">
        <template v-if="!isSkillListComputed">
          <SpellCard
            v-for="item in filteredData" 
            :key="item.id"
            :spell="item"
            :is-upgrade-expanded="isUpgradeExpanded(item.id)"
            @toggle-upgrades="toggleUpgrades(item.id)"
          />
        </template>
        <template v-else>
          <SkillCard
            v-for="item in filteredData"
            :key="item.id"
            :skill="item"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useSpellSearch } from '@/composables/useSpellSearch';
import { useSkillSearch } from '@/composables/useSkillSearch';
import SpellCard from '@/components/SpellCard.vue';
import SkillCard from '@/components/SkillCard.vue';

export default {
  name: "SearchApp",
  components: {
    SpellCard,
    SkillCard,
  },
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
    isSkillList: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const spellSearch = useSpellSearch();
    const skillSearch = useSkillSearch();

    const isSearchVisible = ref(true);
    const isTypesVisible = ref(false);

    const isSkillListComputed = computed(() => props.isSkillList);

    const searchQuery = computed({
      get: () => isSkillListComputed.value ? skillSearch.searchQuery.value : spellSearch.searchQuery.value,
      set: (val) => {
        if (isSkillListComputed.value) {
          skillSearch.searchQuery.value = val;
        } else {
          spellSearch.searchQuery.value = val;
        }
      }
    });

    const includeUpgrades = computed({
      get: () => spellSearch.includeUpgrades.value,
      set: (val) => { spellSearch.includeUpgrades.value = val; }
    });

    const filteredData = computed(() => 
      isSkillListComputed.value ? skillSearch.filteredData.value : spellSearch.filteredData.value
    );

    const selectedTypes = computed({
      get: () => isSkillListComputed.value ? skillSearch.selectedTypes.value : spellSearch.selectedTypes.value,
      set: (val) => {
        if (isSkillListComputed.value) {
          skillSearch.selectedTypes.value = val;
        } else {
          spellSearch.selectedTypes.value = val;
        }
      }
    });

    const toggleSearch = () => {
      isSearchVisible.value = !isSearchVisible.value;
    };

    const toggleTypes = () => {
      isTypesVisible.value = !isTypesVisible.value;
    };

    const toggleType = (type) => {
      if (isSkillListComputed.value) {
        skillSearch.toggleType(type);
      } else {
        spellSearch.toggleType(type);
      }
    };

    const clearSearch = () => {
      searchQuery.value = '';
      selectedTypes.value = [];
      if (!isSkillListComputed.value) {
        includeUpgrades.value = false;
      }
    };

    const hasSearchCriteria = computed(() => {
      return searchQuery.value !== '' || selectedTypes.value.length > 0 || (!isSkillListComputed.value && includeUpgrades.value);
    });

    const types = [
      "Fire", "Lightning", "Ice", "Nature", "Arcane", "Dark", "Holy", "Sorcery",
      "Conjuration", "Enchantment", "Word", "Orb", "Dragon", "Translocation",
      "Metallic", "Eye", "Chaos", "Blood"
    ];

    return {
      searchQuery,
      includeUpgrades,
      filteredData,
      isUpgradeExpanded: spellSearch.isUpgradeExpanded,
      toggleUpgrades: spellSearch.toggleUpgrades,
      getUpgradesCount: spellSearch.getUpgradesCount,
      getSortedUpgrades: spellSearch.getSortedUpgrades,
      isSearchVisible,
      isTypesVisible,
      toggleSearch,
      toggleTypes,
      types,
      selectedTypes,
      toggleType,
      clearSearch,
      hasSearchCriteria,
      isSkillListComputed,
    };
  },
};
</script>

<style scoped>
@import '../styles/darkMode.css';
@import '../styles/typeButtons.css';

.search-app {
  min-height: 100vh;
}

.header {
  padding: 0.5rem;
  background-color: transparent;
}

.search-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.toggle-button,
.clear-button {
  padding: 0.25rem 0.75rem;
  background-color: #e9ecef;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.toggle-button:hover,
.clear-button:hover {
  background-color: #ced4da;
}

.clear-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.search-inner {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 0.5rem;
}

#textSearch {
  margin-bottom: 0.5rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #ced4da;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.content {
  padding: 1rem;
}

.type-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center;
}

.type-button {
  padding: 0.25rem 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: #f8f9fa;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.type-button.active {
  color: white;
  border-color: transparent;
}

.form-check-input:checked {
  background-color: #74acfc;
  border-color: #74acfc;
}

@media screen and (min-width: 768px) {
  .search-inner {
    flex-direction: row;
    align-items: center;
  }

  #textSearch {
    flex-grow: 1;
    margin-bottom: 0;
    margin-right: 1rem;
  }
}
</style>