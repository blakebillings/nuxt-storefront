<template>
  <div class="sf-search-bar">
    <input
      v-focus
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      v-on="listeners"
    />
    <!-- @slot -->
    <slot name="icon">
      <SfButton class="sf-search-bar__button sf-button--pure" @click="$emit('click', value)">
        <span v-if="icon" class="sf-search-bar__icon">
          <SfIcon :color="icon.color" :size="icon.size" icon="search" />
        </span>
      </SfButton>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { SfButton, SfIcon } from "@storefront-ui/vue"
import { focus } from "@storefront-ui/vue/src/utilities/directives"

export default defineComponent({
  name: "SfSearchBar",
  directives: {
    focus,
  },
  components: { SfIcon, SfButton },
  inheritAttrs: false,
  props: {
    // Text for placeholder
    placeholder: {
      type: String,
      default: "",
    },
    // Value that will be displayed in search bar
    value: {
      type: [Number, String],
      default: null,
    },
    // Object to define icon look. Should have values for color and size
    icon: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
        "keyup.enter": (event) => this.$emit("input", event.target.value),
        "keyup.esc": () => this.$emit("input", ""),
        blur: () => this.$emit("blur"),
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.sf-search-bar {
  display: flex;

  &__input {
    text-indent: 2%;
    outline: none;
  }
}
</style>
