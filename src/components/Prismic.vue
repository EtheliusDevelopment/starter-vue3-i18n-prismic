<template>
  <p>You clicked {{ numOfClicks }} times.</p>
  <button @click="handleClick()">Click me to increment!</button>
</template>

<script>
import { ref } from "vue";
import { usePrismic } from "@prismicio/vue";

export default {
    name: 'Prismic',
    methods: {
    async handleClick() {
        console.log(this.$prismic.client);
      const document = await this.$prismic.client.getByID("YO3vqxIAACkA5g-P")
      console.log(document);
    },
  },
}

// export default {
//   name: "Prismic",
//   setup() {
//     let numOfClicks = ref(0);

//     async function handleClick() {
//       const prismic = usePrismic();
//       console.log(await prismic);
//       const document = await $prismic.client.getSingle("post");
//       console.log(document);
      
//     }

//     return {
//       handleClick,
//       numOfClicks,
//     };
//   },
// };
</script>

