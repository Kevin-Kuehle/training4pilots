<script setup lang="ts">
import { ContentLayouter } from "@components";

defineProps({
  pageTitle: {
    type: String,
    required: false,
    default: "Default View",
  },
});

/* 

-> load a page by slug
-> a page as sections and load sections components by slugs (need to be the same like component name)

*/
</script>

<template>
  <ContentLayouter>
    <div class="page-title area-content">
      <h2>{{ pageTitle }}</h2>
    </div>

    <!-- place sections from array -->
  </ContentLayouter>
</template>

<styles lang="scss" scoped>
.page-title {
  padding-block: 3rem;
}
</styles>
