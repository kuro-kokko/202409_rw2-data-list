<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="row text-start">
        <div class="col-md-10">
          <div class="d-flex justify-content-between border-bottom align-items-center mb-2 pb-2" translate="no">
            <h5 class="card-title text-nowrap mb-0 pe-3">{{ spell.name }}</h5>
            <div>
              <span
                v-for="type in spell.type"
                :key="type"
                :class="'badge bg-' + type"
              >{{ type }}</span>
            </div>
          </div>
          <p class="card-text" v-html="spell.text.replace(/\./g, '.<br>')"></p>
        </div>
        <div class="col-md-2 border-start" translate="no">
          <div class="d-flex justify-content-between pt-2">
            <small class="text-muted">level: {{ spell.level }}</small>
          </div>
          <div v-if="shouldDisplayRange" class="d-flex justify-content-between">
            <small class="text-muted">
              <template v-if="isStandardRange">
                range: 
                <span v-if="isRangeWithLOS" 
                      :data-bs-toggle="'tooltip'" 
                      :title="getRangeTooltip">
                  {{ getRangeValue }}*
                </span>
                <span v-else>{{ spell.range }}</span>
              </template>
              <template v-else>
                {{ spell.range }}
              </template>
            </small>
          </div>
          <div v-if="shouldDisplayCharges" class="d-flex justify-content-between">
            <small class="text-muted">charges: {{ spell.charges }}</small>
          </div>
          <div v-if="shouldDisplayHpCost" class="d-flex justify-content-between">
            <small class="text-muted">hp costs: {{ spell.hpCost }}</small>
          </div>
          <div class="pt-2"></div>
          <div v-for="attr in spell.attribute" :key="attr" class="d-flex justify-content-between text-nowrap">
            <small class="text-muted">{{ attr }}</small>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <button
          class="btn btn-sm"
          :class="[
            isUpgradeExpanded ? 'btn-secondary' : 'btn-outline-secondary',
            { 'active': isUpgradeExpanded }
          ]"
          @click="$emit('toggle-upgrades')"
        >
          Upgrades ({{ getUpgradesCount(spell.id) }})
        </button>
      </div>
      <div v-if="isUpgradeExpanded" class="mt-3">
        <UpgradeCard
          v-for="upgrade in getSortedUpgrades(spell.id)"
          :key="upgrade.subId"
          :upgrade="upgrade"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useSpellSearch } from '@/composables/useSpellSearch';
import UpgradeCard from '@/components/UpgradeCard.vue';
import { computed } from 'vue';

export default {
  name: "SpellCard",
  components: {
    UpgradeCard,
  },
  props: {
    spell: {
      type: Object,
      required: true,
    },
    isUpgradeExpanded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { getUpgradesCount, getSortedUpgrades } = useSpellSearch();

    const isValidValue = (value) => {
      return value !== 0 && value !== null && value !== '';
    };

    const shouldDisplayRange = computed(() => isValidValue(props.spell.range));
    const shouldDisplayCharges = computed(() => isValidValue(props.spell.charges));
    const shouldDisplayHpCost = computed(() => isValidValue(props.spell.hpCost));

    const isStandardRange = computed(() => {
      const specialRanges = ["Quick Cast", "Melee Range"];
      return !specialRanges.includes(props.spell.range) && !isNaN(parseFloat(props.spell.range));
    });

    const isRangeWithLOS = computed(() => {
      return typeof props.spell.range === 'string' && props.spell.range.includes('(LOS)');
    });

    const getRangeValue = computed(() => {
      if (isRangeWithLOS.value) {
        return props.spell.range.split(' ')[0];
      }
      return props.spell.range;
    });

    const getRangeTooltip = computed(() => {
      return isRangeWithLOS.value ? 'Ignores LOS' : '';
    });

    return {
      getUpgradesCount,
      getSortedUpgrades,
      shouldDisplayRange,
      shouldDisplayCharges,
      shouldDisplayHpCost,
      isStandardRange,
      isRangeWithLOS,
      getRangeValue,
      getRangeTooltip,
    };
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 800px;
}

.btn-secondary.active {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}
</style>