<script setup lang="ts">
import { ref } from "vue";
import { MainMenu, Button, ButtonMobileBurger } from "@components";
import { Icon, Cart } from "@components";
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

const handleClick = (id: string) => {
  console.log(id);
};
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
      <ButtonMobileBurger @change="mobileMenuStateChanged" />
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
        <Button text="Anmelden" id="login" @onClick="handleClick" />
        <div class="c-header__cart"><Cart /></div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@scss";

.c-header {
  width: 100%;
  padding-block: 0.5rem;
  display: grid;
  background-color: var(--color-header);
  color: white;
  grid-template-columns: 1fr var(--width-mobile-button);
  grid-template-rows: var(--height-mobile-header);
  grid-template-areas: "mobileLogo mobileButton" "mobile-menu-wrapper mobile-menu-wrapper";
  transform: all 0.2 linear;
  position: relative;
  z-index: 1000;

  @include breakpoint(XXL) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  &__wrapper {
    overflow: hidden;
    display: inline-grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr 5fr 1fr;
    grid-area: mobile-menu-wrapper;
    grid-template-areas: ". menu menu" ". action cart";
    position: absolute;
    left: -110%;
    top: 8px;
    width: 100%;
    height: auto;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 1;
    transition: 0.5s all ease-in-out;
    padding-top: 2rem;

    background-color: var(--primary-color-darker);

    @include breakpoint(XXL) {
      background-color: inherit;
      padding-top: initial;
      padding-block: initial;
      grid-template-areas: ". menu ." ". action . " ". cart .";
      background-color: initial;
    }

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
      grid-template-areas: "logo menu action cart";
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

    @include breakpoint(XXL) {
      padding: 0;
    }
  }

  &__action {
    grid-area: action;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    color: white;
    padding-block: 1rem;

    @include breakpoint(XXL) {
      padding-block: initial;
      padding-inline: 1rem;
    }
  }

  &__cart {
    grid-area: cart;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;

    svg {
      max-height: 24px;
      width: auto;
    }

    @include breakpoint(XXL) {
      padding-left: 1rem;
    }
  }
}
</style>
