import type { routerViewLocationKey } from 'vue-router';
<script setup lang="ts"></script>

<template>
  <div class="c-contact-form row justify-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="row col-12 col-sm-8 q-col-gutter-sm"
    >
      <div class="col-12 col-md-6">
        <q-input
          label-color="primary"
          outlined
          v-model="firstName"
          label="Vorname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Vorname ist ungültig.']"
        />
      </div>
      <div class="col-12 col-md-6">
        <q-input
          label-color="primary"
          outlined
          v-model="lastName"
          label="Nachname"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Nachname ist ungültig.',
          ]"
        />
      </div>

      <div class="col-12">
        <q-input
          label-color="primary"
          outlined
          type="email"
          v-model="formEmail"
          label="E-Mail"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Bitte füge deine E-Mail ein.',
            (val) => /.+@.+/.test(val) || 'E-Mail muss gültig sein.',
          ]"
        />
      </div>

      <div class="col-12">
        <q-input
          label-color="primary"
          outlined
          type="textarea"
          v-model="formMessage"
          label="Nachricht"
          :rules="[
            (val !== null && val !== '') || 'Bitte füge eine Nachricht ein.',
            (val) => val.length < 1000 || 'Deine Nachricht ist zu lang.',
          ]"
        />
      </div>

      <div class="col-12">
        <q-btn label="Absenden" type="submit" color="primary" />
        <q-btn
          label="Zurücksetzen"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<style scoped lang="scss"></style>
