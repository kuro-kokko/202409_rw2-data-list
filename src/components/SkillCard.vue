<template>
  <div class="card mt-2 skill-card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-10">
          <div class="d-flex justify-content-between border-bottom align-items-center mb-2 pb-2" translate="no">
            <h5 class="card-title text-nowrap mb-0 pe-3">{{ skill.name }}</h5>
            <div>
              <span
                v-for="type in skill.type"
                :key="type"
                :class="'badge bg-' + type"
              >{{ type }}</span>
            </div>
          </div>
          <p class="card-text mt-2" v-html="skill.text.replace(/\./g, '.<br>')"></p>
        </div>
        <div class="col-md-2 border-start pt-1" translate="no">
          <small class="text-muted">level: {{ skill.level }}</small>
          <div class="pt-2"></div>
          <div v-for="attr in skill.attribute" :key="attr" class="d-flex justify-content-between text-nowrap">
            <small class="text-muted">{{ attr }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.skill-card {
  width: 100%;
  max-width: 800px;
}
</style>