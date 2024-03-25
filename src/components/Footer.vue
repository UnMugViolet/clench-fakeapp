<script setup>
    import Input from '@/components/ui/input/Input.vue';
    import Button from '@/components/ui/button/Button.vue';


</script>
<template>
    <footer class="flex flex-col w-full px-4 md:px-16 pb-4 pt-20 md:pt-28 gap-8">
        <div class="flex justify-center md:justify-start">
            <router-link to="/">
                <img src="@/assets/icones/logo.svg" alt="Vue logo" class="w-36 md:w-44" />
            </router-link>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between items-center gap-4 py-5">
            <div class="flex flex-col gap-4 w-full md:w-1/2">
                <h3 class="text-3xl font-semibold text-center md:text-left">Donnez votre argent à Julick</h3>
                <div>
                    <p class="text-zinc-500 text-base max-w-xl mb-5 text-center md:text-left">
                        Le Lorem Ipsum est simplement du faux texte employé dans la
                        composition et la mise en page avant impression.
                    </p>
                    <Button type="submit" variant="link" class="flex justify-start px-0 py-1 text-sm">
                        <router-link to="/contact">
                            Nous contacter
                        </router-link>
                    </Button>
                </div>
            </div>
            <div class="flex flex-col gap-4 text-center md:text-left">
                <h4 class="text-base md:text-2xl font-semibold">Inscrivez vous à notre Newsletter !</h4>
                <div class="flex items-center gap-4">
                    <Input id="email" type="email" placeholder="Email" class="bg-white text-zinc-500"/>
                    <Button type="submit" variant="outline" class="px-6">
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
