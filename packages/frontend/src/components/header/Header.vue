<script setup>
import { ref } from "vue";
import { MainMenu } from "@components/main-menu";
import { ButtonMobileMenu } from "@components/buttons";
import { IconLogo, IconCart } from "@components/icons";
import { useDeviceStore } from "@stores";
import { BREAKPOINTS } from "@configs";

const deviceStore = useDeviceStore();
let eventWindowResize;

let isOpen = ref(false);

function mobileMenuStateChanged(state) {
  isOpen.value = state;
}

const menu = ref([
  { name: "Startseite", link: "/" },
  {
    name: "Sprechfunkzeugnisse",
    link: "/",
    subMenu: [
      { name: "BZF-I", link: "/" },
      { name: "BZF-II", link: "/" },
      { name: "AFZ", link: "/" },
      { name: "Prüfungsablauf", link: "/" },
    ],
  },
  {
    name: "Kursangebote",
    link: "/",
    subMenu: [
      { name: "BZF-I 💕", link: "/", subMenu: [{ name: "BZF-I", link: "/" }] },
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
      <IconLogo />
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
        <IconLogo />
      </div>
      <div class="c-header__menu">
        <MainMenu :items="menu" />
      </div>
      <div class="c-header__action"></div>
      <div class="c-header__cart">
        warenkorb <IconCart fill="var(--color-1)" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@scss";

svg {
  height: 100%;
  width: auto;
}

.c-header {
  width: 100%;
  display: grid;
  background-color: var(--primary-color);
  grid-template-columns: 1fr var(--width-mobile-button);
  grid-template-rows: var(--height-mobile-header);
  grid-template-areas: "mobileLogo mobileButton" "mobile-menu-wrapper mobile-menu-wrapper";
  transform: all 0.2 linear;

  @include breakpoint(XXL) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  &__mobile-logo {
    grid-area: mobileLogo;
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px;
    overflow: hidden;
    background-color: var(--primary-color);
  }

  &__mobile-menu-button-wrapper {
    grid-area: mobileButton;
    z-index: 1000;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--primary-color);
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
    // top: var(--height-mobile-header);
    top: var(--height-mobile-header);
    width: 100%;
    height: auto;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);

    background-color: rgb(255, 255, 255);
    opacity: 1;
    transition: 0.5s all ease-in-out;

    &.open {
      left: -100%;
      opacity: 0;
    }

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
    padding: 30px 0;

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
    padding: 20px 0;
  }
}
</style>
