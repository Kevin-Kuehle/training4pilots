<script setup lang="ts">
const imageUrl =
  "https://s3-alpha-sig.figma.com/img/1888/ca0d/9ba6425fa484b4891b114a3f4d9835a2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5phWhVtLT3UIERVbkdaO8x0sasIHHPrMpjRF40XyHML9VwUFNWhQsmHvSsHoJbOJWYmK-oh1gz9aujIzO5dY1T~A26cYMQ7VMjMJZ8ssCD-MXMrS~DoqAUj91tkD32CNrxgstyfHv7c-9vZFO48sxirEfxpd-Z06kvz9OTf0eUizPQNbf9XwwNxXDIG2LoWwwc29FCOUNNJGb7HGDHyjS47eRTYna0Lrb~whtdqButxW0IEI4CqKFAuvutreosQu8Klm5~RTPK~leNCZR5m6nxp~aQ~0VsVzaDJ2E75HidHF~3maFfDZyL51cnX8qtIkxPGgzaM396Wtm8dcIp24A__";

const services: string[] = [
  "bzf-i",
  "bzf-ii",
  "bzf-iii",
  "bzf-iv",
  "bzf-v",
  "bzf-vi",
  "bzf-vii",
];
</script>
<template>
  <section class="c-section-website-intro full-width c-content-grid">
    <div class="c-section-website-intro__content content">
      <div class="c-section-website-intro__content__title">
        <h1>
          Herzlich Willkommen bei
          <span class="text-akcent">Training4Pilots!</span>
        </h1>
      </div>
      <div class="c-section-website-intro__content__text text-white">
        <p>
          Wir freuen uns, Sie auf unserer Webseite begrüßen zu dürfen. Bei
          Training4Pilots geht es um die Weiterbildung von Piloten. Erfahren Sie
          mehr über unsere Kurse und Dienstleistungen und wie wir angehenden
          Piloten auf ihrem Weg zum Traumberuf begleiten.
        </p>
      </div>
      <div class="c-section-website-intro__content__actions"></div>
      <q-btn
        padding="sm"
        size="md"
        color="secondary"
        text-color="primary"
        class="text-bold"
        label="Kursangebote"
        @click="onClick"
      />
    </div>

    <div class="c-section-website-intro__image">
      <img :src="imageUrl" alt="cat" />
    </div>

    <div class="c-section-website-intro__services content">
      <div class="c-section-website-intro__services__title">
        <span class="text-bold">User </span>
        <span class="text-akcent">Service!</span>
      </div>

      <ul class="c-section-website-intro__services__list">
        <li
          class="c-section-website-intro__services__list__item"
          v-for="(item, index) in services"
          :key="index"
        >
          <q-icon color="'#1a1a1a'" class="icon" name="check" />
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.c-section-website-intro {
  @import "@scss";
  --section-height: 50dvh;
  --header-height: 65px;

  background: var(--primary-color);
  overflow: hidden;
  position: relative;

  grid-template-rows: minmax(0, 10px) [text-start] min-content [text-end] 25px [service-start] 1fr [service-end];

  &__content {
    grid-area: 2 / 2;
    padding-block: 5rem;
    z-index: 500;

    &__title {
      grid-area: content;
      margin-bottom: 1rem;
      color: white;
      font-weight: light;
    }

    &__text {
      max-width: 900px;
    }

    &__actions {
      margin-block: 1rem;
    }
  }

  /* image here */
  &__image {
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 52% 100%, 0% 49%);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 30%;
    z-index: 100;

    @include breakpoint-desktop-first(XL) {
      display: none;
    }

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__services {
    align-self: flex-end;
    justify-self: stretch;
    padding-block: 2rem;

    grid-column: content;
    grid-row: service;

    &__title {
      font-size: 1.4rem;
      text-align: center;
      margin-bottom: 1rem;
      color: white;
    }

    &__list {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      gap: 7px 35px;
      margin: 0 auto;

      list-style: none;

      @include breakpoint-desktop-first(XL) {
        max-width: 200px;
        border: 1px red dotted;
      }

      &__item {
        color: white;
        flex: 0 0 auto;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-size: 1.2rem;

        .icon {
          margin-inline-end: 0.5rem;
        }
      }
    }
  }
}
</style>
