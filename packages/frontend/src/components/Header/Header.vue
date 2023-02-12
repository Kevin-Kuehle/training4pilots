<template>
  <div class="header">
    <div class="header__mobile-menu-button">
      <div class="header__mobile-menu-button__icon">X</div>
    </div>
    <div class="header__inner">
      <div class="logo">logo</div>
      <div class="menu">
        <MainMenu :items="menu" />
      </div>
      <div class="action">action button</div>
      <div class="cart">warenkorb</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MainMenu from "../main-menu/main-menu.vue";

export default {
  components: {
    MainMenu,
  },
  setup() {
    const menu = ref([
      { name: "Home", link: "/" },
      { name: "Menu-1", link: "/" },
      { name: "Menu-2", link: "/" },
      { name: "Menu-3", link: "/" },
    ]);

    return { menu };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.header {
  background-color: grey;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-rows: 100% 0;
  grid-template-columns: 100%;
  grid-template-areas: "mobile-menu-button" "inner";
  background-color: red;

  &__inner {
    position: absolute;
    left: 0;
    top: 0;
    height: auto;
    grid-area: inner;
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-template-areas: "logo" "menu" "action" "cart";
    border: 1px solid red;
    background-color: darkblue;
  }

  &__mobile-menu-button {
    grid-area: mobile-menu-button;
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

  .logo {
    grid-area: logo;
    padding: 30px 0;
  }
  .menu {
    grid-area: menu;
  }

  .action {
    grid-area: action;
  }

  .cart {
    grid-area: cart;
  }
}
</style>
