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
    <header class="bg-primary w-full border text-white">
        <Menu></Menu>
    </header>
</template>

<style lang="scss" scoped></style>
