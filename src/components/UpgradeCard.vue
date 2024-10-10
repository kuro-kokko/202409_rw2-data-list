<template>
  <div class="card mt-2 upgrade-card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-10">
          <div class="d-flex justify-content-between border-bottom align-items-center mb-2 pb-2" translate="no">
            <h6 class="card-title text-nowrap mb-0 pe-3">{{ upgrade.name }}</h6>
            <div>
              <span
                v-for="type in upgrade.exType"
                :key="type"
                :class="'badge bg-' + type"
              >{{ type }}</span>
            </div>
          </div>
          <p class="card-text mt-2" v-html="upgrade.text.replace(/\./g, '.<br>')"></p>
        </div>
        <div class="col-md-2 border-start pt-1" translate="no">
          <small class="text-muted">level: {{ upgrade.level }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpgradeCard",
  props: {
    upgrade: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.upgrade-card {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}
</style>