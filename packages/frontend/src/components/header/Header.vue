<script setup lang="ts">
import { ref } from "vue";
import { MainMenu } from "@components/main-menu";
import { ButtonMobileMenu } from "@components/buttons";
import { Icon } from "@components";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";

const deviceStore = useDeviceStore();
let eventWindowResize;

let isOpen = ref(false);

function mobileMenuStateChanged(state: boolean) {
  isOpen.value = state;
}

const menuColors = ref({
  normal: "var(--light-color-full)",
  hover: "var(--secondary-color)",
  active: "var(--color-3)",
});

const menu = ref([
  { name: "Startseite", link: "/" },
  {
    name: "Sprechfunkzeugnisse",

    link: "/",
    subMenu: [
      { name: "BZF-I", link: "/" },
      {
        name: "BZF-II",
        link: "/",
        subMenu: [
          {
            name: "BZF-I",
            link: "/",
            subMenu: [{ name: "BZF-I", link: "/" }],
          },
          { name: "BZF-II", link: "/" },
          { name: "AFZ", link: "/" },
          { name: "Prüfungsablauf", link: "/" },
          { name: "BZF-II", link: "/" },
          { name: "AFZ", link: "/" },
          { name: "Prüfungsablauf", link: "/" },
        ],
      },
      { name: "AFZ", link: "/" },
      { name: "Prüfungsablauf", link: "/" },
      { name: "BZF-II", link: "/" },
      { name: "AFZ", link: "/" },
      { name: "Prüfungsablauf", link: "/" },
    ],
  },
  {
    name: "Kursangebote",
    link: "/",
    subMenu: [
      {
        name: "BZF-I",
        link: "/",
        subMenu: [{ name: "BZF-I", link: "/" }],
      },
      { name: "BZF-II", link: "/" },
      { name: "AFZ", link: "/" },
      { name: "Prüfungsablauf", link: "/" },
      { name: "BZF-II", link: "/" },
      { name: "AFZ", link: "/" },
      { name: "Prüfungsablauf", link: "/" },
    ],
  },
  { name: "Über Uns", link: "/" },
  { name: "Kontakt", link: "/" },
]);
</script>

<template>
  <header class="c-header">
    <div
      v-if="deviceStore.breakpoint <= BREAKPOINTS.XXL"
      class="c-header__mobile-logo"
    >
      <Icon name="logo" :size="300" />
    </div>
    <div
      v-if="deviceStore.breakpoint <= BREAKPOINTS.XXL"
      class="c-header__mobile-menu-button-wrapper"
    >
      <ButtonMobileMenu @change="mobileMenuStateChanged" />
    </div>
    <!-- menu window -->
    <div class="c-header__wrapper" :class="{ open: isOpen }">
      <div v-if="deviceStore.isDesktop" class="c-header__logo">
        <Icon name="logo" :size="120" />
      </div>
      <div class="c-header__menu">
        <MainMenu :colors="menuColors" :items="menu" />
      </div>
      <div class="c-header__action"></div>
      <div class="c-header__cart">
        warenkorb <Icon name="cart" :size="200" color="var(--color-1)" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@scss";

.c-header {
  width: 100%;
  display: grid;
  background-color: var(--primary-color);
  color: white;
  grid-template-columns: 1fr var(--width-mobile-button);
  grid-template-rows: var(--height-mobile-header);
  grid-template-areas: "mobileLogo mobileButton" "mobile-menu-wrapper mobile-menu-wrapper";
  transform: all 0.2 linear;

  @include breakpoint(XXL) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  &__wrapper {
    overflow: hidden;
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 100%;
    grid-area: mobile-menu-wrapper;
    grid-template-areas: "menu" "cart" "action";

    position: absolute;
    left: 0;
    top: var(--height-mobile-header);
    width: 100%;
    height: auto;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 1;
    transition: 0.5s all ease-in-out;

    /* Desktop */
    @include breakpoint(XXL) {
      box-shadow: initial;
      position: initial;
      top: initial;
      grid-template-columns: 250px 1fr auto auto;
      grid-template-rows: auto;
      grid-template-areas: "logo menu cart action";
      grid-template-columns: 300px 1fr 100px 100px;
      overflow: visible;
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
    padding: 30px 0;
    display: flex;
    flex-flow: row;
    justify-content: center;
    color: white;
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
