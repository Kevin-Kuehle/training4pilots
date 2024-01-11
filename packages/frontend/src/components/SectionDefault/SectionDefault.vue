<script setup lang="ts">
defineProps({
  pageTitle: {
    type: String,
    required: false,
    default: "Here an Example Page Title",
  },
  subTitle: {
    type: String,
    required: false,
    default: "I am a subtitle",
  },
  layout: {
    type: String,
    required: false,
    default: "content",
  },
});
</script>

<template>
  <section
    :class="layout === 'content' ? 'content' : ''"
    class="c-section-default"
  >
    <div class="c-section-default__title">
      <h2 class="title">{{ pageTitle }}</h2>
      <h3 class="subtitle">{{ subTitle }}</h3>
      <span class="c-section-default__title__element">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="12"
          viewBox="0 0 41 12"
          fill="none"
        >
          <path
            d="M38.6603 2L21 10L2.00012 2"
            stroke="#D4BB89"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </div>
    <slot />
  </section>
</template>

<styles lang="scss" scoped>
.c-section-default {
  padding-block: 3rem;

  &__title {
    display: flex;
    flex-flow: column;
    justify-content: center;

    h2.title,
    h3.subtitle {
      flex: 0 0 auto;
      text-align: center;
    }

    h2.title {
      padding-block: 0.3rem;
    }
    h3.subtitle {
      font-size: 0.8em;
    }

    &__element {
      padding-block: 1rem;
      flex: 1;
      height: 12px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
    }
  }
}
</styles>
