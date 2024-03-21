<script setup>
    import Input from '@/components/ui/input/Input.vue';
    import Button from '@/components/ui/button/Button.vue';


</script>
<template>
    <footer class="flex flex-col w-full px-16 pb-4 pt-12 gap-8">
        <div class="">
            <router-link to="/">
                <img src="@/assets/icones/logo.svg" alt="Vue logo" width="175" height="175" />
            </router-link>
        </div>
        <div class="flex justify-between items-center py-5">
            <div class="flex flex-col gap-4 w-1/2">
                <h3 class="text-3xl font-semibold">Donnez votre argent à Julick</h3>
                <p class="text-zinc-500 text-base max-w-xl mb-5">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression.
                </p>
                <div>
                    <router-link to="/contact"
                    class="border-b border-transparent transition duration-300 border-white hover:border-white">Nous
                    contacter</router-link>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <h4 class="text-2xl font-semibold">Inscrivez vous à notre Newsletter !</h4>
                <div class="flex items-center gap-4">
                    <Input id="email" type="email" placeholder="Email" class="bg-white text-zinc-500"/>
                    <Button type="submit" variant="outline" class="px-6">
                        S'inscrire
                    </Button>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <p class="text-white text-base">© Clench - {{ new Date().getFullYear() }}</p>
        </div>
    </footer>
</template>
