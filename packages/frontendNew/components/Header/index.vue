<script setup lang="ts">
let isOpen = ref(false)

function mobileMenuStateChanged(state: boolean) {
    isOpen.value = state
}

const handleClick = (id: string) => {
    console.log(id)
}
</script>

<template>
    <header class="bg-slate-700 w-full border text-white">
        Ich bin ein Header
    </header>
</template>

<style lang="scss" scoped></style>
