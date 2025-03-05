<script setup lang="ts">

 const menuItems = [
    { name: "Home", path: "/"},
    { name: "Services", path: "/services"}
 ]

</script>

<template>
    <div>
        <header class="p-2 fixed top-0 z-50 w-full">
            <nav class="bg-black rounded-md sticky top-0">
                <ul class="p-5 flex justify-center gap-10 menu-items">
                    <li v-for="item in menuItems" :key="item.path">
                        <router-link :to="item.path">
                            {{ item.name }}
                        </router-link>
                    </li>
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