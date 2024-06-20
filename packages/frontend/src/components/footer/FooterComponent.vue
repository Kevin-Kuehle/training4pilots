<script setup lang="ts"></script>

<template>
  <div class="c-footer">
    <div class="c-content-grid">
      <div class="c-footer__logo text-white">logo</div>
      <div class="area-content c-footer__content">
        <div class="c-footer__socials">instagram facebook</div>
        <div class="c-footer__links">
          <RouterLink to="/Kontakt">Kontakt</RouterLink>
          <RouterLink to="/impressum">Impressum</RouterLink>
          <RouterLink to="/Datenschutzerklärung"
            >Datenschutzerklärung</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.c-footer {
  height: 80px;
  width: 100%;
  background-color: var(--primary-color-darker);
  display: flex;
  flex-flow: row nowrap;

  .c-content-grid {
    flex: 1;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-flow: row;
    flex: 1;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;

    a {
      text-decoration: none;
      color: var(--light-color-full);
      font-size: 1.2rem;
    }
  }
}
</style>
