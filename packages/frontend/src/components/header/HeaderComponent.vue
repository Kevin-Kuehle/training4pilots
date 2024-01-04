<script setup lang="ts">
import { ref } from "vue";
import { MainMenu, Button } from "@components";
import { Icon } from "@components";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";

const deviceStore = useDeviceStore();

let isOpen = ref(false);

function mobileMenuStateChanged(state: boolean) {
  isOpen.value = state;
}

const menuColors = ref({
  normal: "var(--light-color-full)",
  hover: "var(--secondary-color)",
  active: "var(--color-3)",
});
</script>

<template>
  <header class="c-header">
    <div
      v-if="deviceStore.breakpoint && deviceStore.breakpoint <= BREAKPOINTS.XXL"
      class="c-header__mobile-logo"
    >
      <Icon name="logo" :width="80" />
    </div>
    <div
      v-if="deviceStore.breakpoint && deviceStore.breakpoint <= BREAKPOINTS.XXL"
      class="c-header__mobile-menu-button-wrapper"
    >
      <ButtonMobileMenu @change="mobileMenuStateChanged" />
    </div>
    <!-- menu window -->
    <div class="c-header__wrapper" :class="{ open: isOpen }">
      <div v-if="deviceStore.isDesktop" class="c-header__logo">
        <Icon name="logo" :width="190" />
      </div>
      <div class="c-header__menu">
        <MainMenu :colors="menuColors" />
      </div>
      <div class="c-header__action">
        <Button text="Anmelden" />
      </div>
      <div class="c-header__cart">
        warenkorb <Icon name="cart" :width="200" color="var(--color-1)" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@scss";

.c-header {
  width: 100%;
  display: grid;
  background-color: var(--color-header);
  color: white;
  grid-template-columns: 1fr var(--width-mobile-button);
  grid-template-rows: var(--height-mobile-header);
  grid-template-areas: "mobileLogo mobileButton" "mobile-menu-wrapper mobile-menu-wrapper";
  transform: all 0.2 linear;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  @include breakpoint(XXL) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  &__wrapper {
    overflow: hidden;
    display: inline-grid;
    grid-auto-rows: auto;
    grid-template-columns: 100%;
    grid-area: mobile-menu-wrapper;
    grid-template-areas: "logo" "menu" "cart" "action";

    position: absolute;
    left: -100%;
    top: var(--height-mobile-header);
    width: 100%;
    height: auto;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 1;
    transition: 0.5s all ease-in-out;

    &.open {
      left: 0;
    }

    /* Desktop */
    @include breakpoint(XXL) {
      box-shadow: initial;
      position: initial;
      top: initial;
      grid-template-columns: 250px 1fr auto auto;
      grid-template-rows: auto;
      grid-template-areas: "logo menu cart action";
      overflow: visible;
    }
  }

  &__mobile-logo {
    display: flex;
    padding-inline: 1rem;
    svg {
      flex: 0 0 200px;
      max-height: 100%;
      justify-self: center;
    }
  }

  &__logo {
    grid-area: logo;
    padding: 30px 0;
    display: flex;
    flex-flow: row;
    justify-content: center;

    @include breakpoint(XXL) {
      padding: 0;
    }
  }
  &__menu {
    grid-area: menu;
    padding: 30px 30px;

    @include breakpoint(XXL) {
      padding: 0;
    }
  }

  &__action {
    grid-area: action;
    display: flex;
    flex-flow: row;
    justify-content: center;
    color: white;
    padding-inline: 20px;
  }

  &__cart {
    grid-area: cart;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    svg {
      max-height: 24px;
      width: auto;
    }
  }
}
</style>
