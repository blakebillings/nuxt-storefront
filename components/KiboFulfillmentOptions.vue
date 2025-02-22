<template>
  <div class="sf-fulfillment-options">
    <slot name="fulfillment-options">
      <SfRadio
        v-for="(fulfillmentOption, index) in fulfillmentOptions"
        :key="`${fulfillmentOption.name}_${index}`"
        :name="fulfillmentOption.name"
        :value="fulfillmentOption.value"
        :label="fulfillmentOption.label"
        :details="fulfillmentOption.details"
        :required="fulfillmentOption.required"
        :disabled="fulfillmentOption.disabled"
        :selected="selectedOption == fulfillmentOption.value ? fulfillmentOption.value : ''"
        class="sf-radio"
        :class="isColumnDisplay && 'column'"
        @change="selectFulfillment(fulfillmentOption)"
      >
        <template v-if="fulfillmentOption.label === pickupInStore" #details>
          <p class="sf-radio__details">
            {{ fulfillmentOption.details }}
          </p>
        </template>
        <template
          v-if="fulfillmentOption.label === pickupInStore && fulfillmentOption.disabled !== true"
          #description
        >
          <p class="sf-radio__details" @click="handleStoreLocatorClick">
            {{ cartItemPurchaseLocation ? "Change Store" : "Select Store" }}
          </p>
        </template>
      </SfRadio>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { SfRadio } from "@storefront-ui/vue"
import { Fulfillment } from "./types/fulfillment"
import { useNuxtApp } from "#app"

export default defineComponent({
  name: "KiboFulfillmentOptions",
  components: {
    SfRadio,
  },
  model: {
    prop: "selectedOption",
    event: "change",
  },
  props: {
    fulfillmentOptions: {
      type: Array,
      default: () => [],
    },
    selectedOption: {
      type: String,
      default: "",
    },
    cartItemPurchaseLocation: {
      type: String,
      default: "",
    },
    isColumnDisplay: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, context) {
    const nuxt = useNuxtApp()
    const pickupInStore = nuxt.nuxt2Context.$config.fullfillmentOptions.find(
      (option) => option.value === "InStorePickup"
    ).label

    const selectFulfillment = (fulfillmentOption: Fulfillment) => {
      context.emit("change", fulfillmentOption.value)
    }
    const handleStoreLocatorClick = () => {
      context.emit("click")
    }
    return {
      selectFulfillment,
      handleStoreLocatorClick,
      pickupInStore,
    }
  },
})
</script>

<style lang="scss">
.sf-fulfillment-options .sf-radio {
  &__content {
    display: flex;
    justify-content: flex-start;
  }

  &__details {
    color: var(--_c-dark-primary);
    font-size: var(--font-size--xs);
    font-family: var(--font-family--primary);
    line-height: 0.875rem;
    font-style: italic;
    margin: 0 0 auto 0.625rem;
  }
}

.column {
  .sf-radio {
    &__content {
      flex-direction: column;
    }

    &__details {
      margin: 0;
      padding: var(--spacer-xs) 0 var(--spacer-2xs) 0;
    }
  }
}
</style>
