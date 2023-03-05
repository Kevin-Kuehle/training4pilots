<script setup>
import { ref } from "vue";
import MainMenu from "../main-menu/main-menu.vue";
import { ButtonMobileMenu } from "@components/buttons";
import { IconLogo, IconCart } from "@components/icons";
import { useViewStore } from "@store/view";

const mobileMenuOpen = ref(true);

const menu = ref([
  { name: "Home1", link: "/" },
  { name: "Menu-1", link: "/" },
  { name: "Menu-2", link: "/" },
  { name: "Menu-3", link: "/" },
]);
</script>

<template>
  <header class="c-header">
    <div class="c-header__logo"><IconLogo /></div>
    <div class="c-header__mobile-menu-button-wrapper">
      <ButtonMobileMenu />
    </div>
    <!-- menu window -->
    <div class="c-header__wrapper">
      <div class="c-header__logo"><IconLogo /></div>
      <div class="c-header__menu">
        <MainMenu :items="menu" />
      </div>
      <div class="c-header__action"></div>
      <div v-if="mobileMenuOpen" class="c-header__cart">
        warenkorb <IconCart fill="var(--color-1)" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@scss";

.test {
  background-color: red;
  height: 600px;
  width: 100%;
}

.c-header {
  width: 100%;
  height: auto;
  background-color: var(--primary-color);

  &__wrapper {
    display: grid;
    grid-template-rows: 50px auto;
    grid-template-columns: 100%;
    grid-template-areas: "mobile-menu-button-wrapper" "inner";
    left: 0;
    top: 0;
    height: auto;
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-template-areas: "logo" "menu" "action" "cart";
    border: 1px solid red;
    background-color: rgb(62, 62, 104);
  }

  &__mobile-menu-button-wrapper {
    grid-area: mobile-menu-button-wrapper;
    z-index: 1000;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;

    &__icon {
      background-color: white;
      width: 30px;
      height: 30px;
      border: 1px solid black;
    }
  }
  &__logo {
    grid-area: logo;
    padding: 30px 0;
    display: flex;
    flex-flow: row;
    justify-content: center;
  }
  &__menu {
    grid-area: menu;
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
