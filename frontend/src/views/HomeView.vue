<script setup lang="ts">
import Card from '../components/Card.vue';

</script>


<template>
    <section id="hero">
        <div class="grid lg:grid-cols-2 gap-5 p-5 md:grid-cols-1">
            <div class="p-5 flex justify-center h-auto items-center">
                <div class="bg-cover flex justify-center">
                    <img src="/task-management-app-hero.svg" alt="" width="500">
                </div>
            </div>
            <div class="p-5 flex justi-center items-center">
                <div>
                    <h1 class="mb-3 text-[3rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p class="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    </section>
    <section id="info" class="m-auto w-3/4">
        <div class="justify-center flex gap-10 flex-col md:flex-row">
            <Card layout="horizontal" class="border-t-3">
                <h3 class="text-lg">Hello Worlld</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga praesentium culpa, ratione quos reiciendis veritatis quae aut voluptatem delectus consectetur sit impedit provident dolores repudiandae a ab, iure dignissimos repellendus!</p>            
            </Card>
            <Card layout="horizontal" class="border-t-3">
                <h3 class="text-lg">Hello Worlld</h3>   
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga praesentium culpa, ratione quos reiciendis veritatis quae aut voluptatem delectus consectetur sit impedit provident dolores repudiandae a ab, iure dignissimos repellendus!</p>           
            </Card>
            <Card layout="horizontal" class="border-t-3">
                <h3 class="text-lg">Hello Worlld</h3>    
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga praesentium culpa, ratione quos reiciendis veritatis quae aut voluptatem delectus consectetur sit impedit provident dolores repudiandae a ab, iure dignissimos repellendus!</p>          
            </Card>
        </div>
    </section>

</template>

<style scoped>

</style>