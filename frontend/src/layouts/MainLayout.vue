<script setup lang="ts">

</script>

<template>
    <div>
        <header class="bg-black p-10">
            <nav>
                <ul class="flex justify-center gap-10 menu-items">
                    <li>Test</li>
                    <li>Test</li>
                </ul>
            </nav>
        </header>

        <main>
            <router-view />
        </main>
        <footer>

        </footer>
    </div>
</template>

<style scoped>
    .menu-items {
        color: #FFFFFF;
        font-size: 1.2rem;
        font-weight: 500;
    }
</style>