import { ref, computed } from "vue";
import { skills as skill } from "@/data/skill";

export function useSkillSearch() {
  const searchQuery = ref("");
  const selectedTypes = ref([]);

  const filteredData = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    if (query === "" && selectedTypes.value.length === 0) {
      return skill;
    }

    return skill.filter((skill) => {
      const skillMatch =
        (query === "" ||
          skill.name.toLowerCase().includes(query) ||
          skill.text.toLowerCase().includes(query)) &&
        (selectedTypes.value.length === 0 ||
          selectedTypes.value.every((type) => skill.type.includes(type)));

      return skillMatch;
    });
  });

  const toggleType = (type) => {
    const index = selectedTypes.value.indexOf(type);
    if (index === -1) {
      selectedTypes.value.push(type);
    } else {
      selectedTypes.value.splice(index, 1);
    }
  };

  return {
    searchQuery,
    filteredData,
    selectedTypes,
    toggleType,
  };
}
