<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <div class="container pt-4">
      <div class="header-content">
        <h1 class="text-center mb-4">Rift Wizard 2 - Data List</h1>
        <div class="button-group">
          <button class="list-toggle" @click="toggleDataSource">
            {{ isSkillList ? 'Show Spell List' : 'Show Skill List' }}
          </button>
          <button class="mode-toggle" @click="toggleDarkMode" :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <font-awesome-icon :icon="isDarkMode ? 'sun' : 'moon'" />
          </button>
        </div>
      </div>
      <SearchApp :isDarkMode="isDarkMode" :isSkillList="isSkillList" @toggle-data-source="toggleDataSource" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchApp from "./components/SearchApp.vue";

export default {
  name: "App",
  components: {
    SearchApp,
  },
  setup() {
    const isDarkMode = ref(false);
    const isSkillList = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    const toggleDataSource = () => {
      isSkillList.value = !isSkillList.value;
    };

    return {
      isDarkMode,
      isSkillList,
      toggleDarkMode,
      toggleDataSource,
    };
  },
};
</script>

<style>
@import './styles/badges.css';
@import './styles/darkMode.css';

#app {
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.dark-mode {
  background-color: #2a2a2a;
  color: #f0f0f0;
}

.container {
  min-height: 100vh;
}

.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
}

.button-group {
  position: absolute;
  right: 0;
  display: flex;
  gap: 0.5rem;
}

.list-toggle,
.mode-toggle {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.list-toggle {
  width: 150px;
  text-align: center;
  background-color: #e0e0e0;
}

.mode-toggle {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
}

.list-toggle:hover,
.mode-toggle:hover {
  background-color: #c0c0c0;
}

.dark-mode .list-toggle {
  background-color: #3a3a3a;
  color: #f0f0f0;
}

.dark-mode .mode-toggle {
  background-color: #4a4a4a;
  color: #f0f0f0;
}

.dark-mode .list-toggle:hover,
.dark-mode .mode-toggle:hover {
  background-color: #5a5a5a;
}
</style>