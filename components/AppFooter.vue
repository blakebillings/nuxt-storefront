<template>
  <SfFooter :column="4" multiple class="footer">
    <SfFooterColumn :title="$t('About us')">
      <SfList>
        <SfListItem v-for="item in aboutUs" :key="item">
          <SfMenuItem :label="$t(item)" />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Departments')">
      <SfList>
        <SfListItem v-for="item in departments" :key="item">
          <SfMenuItem :label="$t(item)" />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Help')">
      <SfList>
        <SfListItem v-for="item in help" :key="item">
          <SfMenuItem :label="$t(item)" />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Payment & Delivery')">
      <SfList>
        <SfListItem v-for="item in paymentsDelivery" :key="item">
          <SfMenuItem :label="$t(item)" />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Social">
      <div class="footer__socials">
        <SfImage
          v-for="item in social"
          :key="item"
          class="footer__social-image"
          :src="'/icons/' + item + '.svg'"
          :alt="item"
          width="32"
          height="32"
        />
      </div>
    </SfFooterColumn>
  </SfFooter>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from "@storefront-ui/vue"

export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem,
  },
  data() {
    return {
      aboutUs: ["Who we are", "Quality in the details", "Customer Reviews"],
      departments: ["Women fashion", "Men fashion", "Kidswear", "Home"],
      help: ["Customer service", "Size guide", "Contact us"],
      paymentsDelivery: ["Purchase terms", "Guarantee"],
      social: ["facebook", "pinterest", "google", "twitter", "youtube"],
      isMobile: false,
      desktopMin: 1024,
    }
  },
}
</script>

<style lang="scss">
.footer {
  margin-bottom: 3.75rem;
  @include for-desktop {
    margin-bottom: 0;
  }

  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }

  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}

.sf-footer {
  .sf-menu-item {
    justify-content: flex-start;
    font-family: var(--font-family--primary);
    @include for-mobile {
      padding-left: var(--spacer-base);
    }

    &__label {
      color: var(--menu-item-label-color, var(--_c-light-secondary));
    }
  }

  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }

  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      max-width: 69rem;
      margin: 0 auto;
    }
  }
}
</style>
