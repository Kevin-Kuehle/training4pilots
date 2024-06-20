<script setup lang="ts">
import {
  SectionWebsiteIntro,
  ContentLayouter,
  Section,
  Banner,
  ContactForm,
} from "@components";

const onClick = () => {
  console.log("clicked");
};

const onSubmitHandler = (data: any) => {
  console.log("test");
};
</script>

<template>
  <ContentLayouter>
    <SectionWebsiteIntro />
    <Section
      pageTitle="Du möchtest ein Sprechfunkzeugnis erwerben?"
      subTitle="Bei uns bist du genau richtig!"
    >
      <div class="row area-full-width wrap q-col-gutter-md">
        <div class="col-12 col-md-6 col-lg-4">
          <p class="vertical-akzent-line">
            Das Sprechfunkzeugnis umgangssprachlich auch Flugfunkzeugnis oder
            Funksprechzeugnis genannt, kann separat während der
            Pilotenausbildung oder als  mitfliegender Passagier ohne
            Vorkenntnisse erworben werden, um den Funkverkehr  mit zugelassenen
            Funkgeräten in einem Flugzeug zu führen.
          </p>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <p class="vertical-akzent-line">
            Durch unsere erfahrenen Berufs- und Privatpiloten wirst du mit dem
            dich zugeschnittenen Online-Unterricht auf die Prüfung vorbereitet.
            Flexible Termine bieten Dir die Möglichkeit, von zu Hause aus am
            Unterricht teilzunehmen.
          </p>
        </div>

        <div class="col-12 col-md-12 col-lg-4">
          <p class="vertical-akzent-line col-4">
            Da unsere Kurse darauf ausgelegt sind, ein möglichst breit
            gefächertes luftfahrtspezifisches Theoriewissen abzudecken,
            empfiehlt es sich bereits vor Beginn der Pilotenausbildung ein
            Flugfunkzeugnis zu erwerben, um bereits mit Vorwissen in die
            Ausbildung einzusteigen. Aber auch als mitfliegender Passagier
            profitierst du von unserem Lernkonzept. Es werden keine besonderen
            Vorkenntnisse verlangt.
          </p>
        </div>
      </div>
    </Section>
    <Banner>
      <div class="c-content-grid">
        <div class="area-content">
          <div class="row">
            <div class="col-12">
              <h3 class="text-white text-center">
                Möchtest du mehr über unsere
                <span class="text-akcent">Angebote</span> erfahren?
              </h3>
            </div>
            <div class="col-12 q-pt-lg flex justify-center">
              <q-btn
                color="secondary"
                textColor="primary"
                label="Angebote"
                class="text-bold"
                @click="onClick"
              />
            </div>
          </div>
        </div>
      </div>
    </Banner>
    <Section :pageTitle="'Kontakt'">
      <ContactForm @onSubmit="onSubmitHandler" />
    </Section>
  </ContentLayouter>
</template>
