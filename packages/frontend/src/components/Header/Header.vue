
<script setup>
import { ref } from "vue";
import MainMenu from "../main-menu/main-menu.vue";
import { IconLogo, IconCart } from "@icons";
import { ButtonMobileMenu } from "@components/buttons";

const menu = ref([
  { name: "Home", link: "/" },
  { name: "Menu-1", link: "/" },
  { name: "Menu-2", link: "/" },
  { name: "Menu-3", link: "/" },
]);
</script>

<template>
  <header class="header">
    <div class="header__mobile-menu-button-wrapper">
      <ButtonMobileMenu />
    </div>
    <div class="header__inner">
      <div class="header__logo"><IconLogo /></div>
      <div class="header__menu">
        <MainMenu :items="menu" />
      </div>
      <div class="header__action"><Button /></div>
      <div class="header__cart">
        warenkorb <IconCart fill="var(--color-1)" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.header {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: 100%;
  grid-template-areas: "mobile-menu-button-wrapper" "inner";
  background-color: var(--primary-color);

  &__inner {
    grid-area: inner;
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
