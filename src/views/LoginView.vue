<script setup>
  import Input from '@/components/ui/input/Input.vue';
  import Button from '@/components/ui/button/Button.vue';
  import InfosForm from '@/components/Forms/InfosForm.vue';
</script>

<template>
  <section class="flex flex-col items-center md:flex-row py-6 md:py-14">
    <InfosForm
      subtitle="Informations"
      title="Connectez vous à votre compte"
      description="Une fois connecté à votre compte vous pourrez vous inscrire à des évènements et publier votre travail.
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
    />
    <form class="w-full md:w-1/2 md:pl-20">
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="email" class="text-sm md:text-base text-left md:text-right md:w-36">Adresse email</label>
        <Input class="bg-white text-black" type="email" id="email" name="email" placeholder="john@doe.com" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="password" class="text-sm md:text-base text-left md:text-right md:w-36">Mot de passe</label>
        <Input class="bg-white text-black" type="password" id="password" name="password" placeholder="Super mot de passe" />
      </div>
      <div class="flex justify-start md:justify-end">
        <Button type="submit" variant="outline">
            S'inscrire
        </Button>
      </div>
    </form>
  </section>
  <div class="flex justify-center items-center gap-1">
    <p class="text-sm md:text-base mb-0.75">Vous n'avez pas encore de compte ?</p>
    <router-link to="/signup">
      <Button variant="link" to="/signup" class="px-1">
        Inscrivez vous
      </Button>
    </router-link>
  </div>
</template>