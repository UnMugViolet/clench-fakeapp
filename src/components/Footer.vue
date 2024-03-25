<script setup>
    import Input from '@/components/ui/input/Input.vue';
    import Button from '@/components/ui/button/Button.vue';


</script>
<template>
    <footer class="flex flex-col w-full px-4 md:px-16 pb-4 pt-20 md:pt-28 gap-8">
        <div class="flex justify-center lg:justify-start">
            <router-link to="/">
                <img src="@/assets/icones/logo.svg" alt="Vue logo" class="w-36 md:w-44" />
            </router-link>
        </div>
        <div class="flex flex-col justify-between items-center py-5 lg:flex-row">
            <div class="flex flex-col text-center lg:text-left gap-4 lg:w-3/4">
                <h3 class="text-3xl font-semibold">Donnez votre argent à Julick</h3>
                <p class="text-zinc-500 text-base max-w-md">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression.
                </p>
                <div class="lg:mt-5">
                    <router-link to="/contact"
                    class="border-b border-transparent transition duration-300 border-white hover:border-white">Nous
                    contacter</router-link>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-4 mt-10 lg:mt-0 lg:max-w-full max-w-xl">
                <h4 class="text-2xl text-center font-semibold w-full">Inscrivez vous à notre Newsletter !</h4>
                <div class="flex flex-row lg:flex-row lg:items-center gap-4">
                    <Input id="email" type="email" placeholder="Email" class="bg-white text-zinc-500"/>
                    <Button type="submit" variant="outline" class="px-4">
                        <router-link to="/signup">
                            S'inscrire
                        </router-link>
                    </Button>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <p class="text-white text-base">© Clench - {{ new Date().getFullYear() }}</p>
        </div>
    </footer>
</template>
