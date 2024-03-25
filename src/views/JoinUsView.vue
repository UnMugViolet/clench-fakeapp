<script setup>
  import Input from '@/components/ui/input/Input.vue';
  import Button from '@/components/ui/button/Button.vue';
  import HeroText from '@/components/HeroText.vue';
</script>

<template>
  <HeroText 
    emoji="🚀"
    subtitle="Une envie de clencher ?"
    title="Rejoignez-nous c'est vraiment chouette" 
    description="Inscrivez-vous pour participer à des évènements et publier votre travail. Ce soir j'ai mangé des pâtes bolognaise." />
  <section class="flex flex-col md:flex-row py-6 md:py-14">
    <div class="flex flex-col justify-start mb-10 md:mb-0 md:w-1/2">
      <h1 class="text-3xl md:text-5xl font-bold">Créer votre compte </h1>
      <img src="@/assets/icones/users.svg" alt="Authentication" class="flex justify-start w-24 py-8" />
      <h2 class="font-semibold mb-2">Informations</h2>
      <p class="text-base text-gray-500 w-11/12 md:w-7/12">
        Une fois votre compte créer vous pourrez vous inscrire à des évènements et publier votre travail.
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
      </p>
    </div>
    <form class="w-full md:w-1/2 md:pl-20">
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="lastname" class="text-sm md:text-base text-left md:text-right md:w-36">Nom de famille</label>
        <Input class="bg-white text-black" type="text" id="lastname" name="lastname" placeholder="Doe" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="firstname" class="text-sm md:text-base text-left md:text-right md:w-36">Prénom</label>
        <Input class="bg-white text-black" type="text" id="firstname" name="firstname" placeholder="John" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="username" class="text-sm md:text-base text-left md:text-right md:w-36">Téléphone</label>
        <Input class="bg-white text-black" type="text" id="username" name="username" placeholder="0618784003" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="email" class="text-sm md:text-base text-left md:text-right md:w-36">Adresse email</label>
        <Input class="bg-white text-black" type="email" id="email" name="email" placeholder="john@doe.com" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="password" class="text-sm md:text-base text-left md:text-right md:w-36">Mot de passe</label>
        <Input class="bg-white text-black" type="password" id="password" name="password" placeholder="Super mot de passe" />
      </div>
      <div class="flex flex-col md:flex-row md:items-center md:gap-3 mb-3 md:mb-4">
        <label for="password" class="text-sm md:text-base text-left md:text-right md:w-36">Confirmation </label>
        <Input class="bg-white text-black" type="password" id="password" name="password" placeholder="Confirmation Super mot de passe" />
      </div>
      <div class="flex justify-start md:justify-end">
        <Button type="submit" variant="outline">
            S'inscrire
        </Button>
      </div>
    </form>
  </section>
</template>