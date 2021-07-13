<template>
  <img alt="Vue I18n logo" src="../assets/logo.png" />
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="ja">ja</option>
    </select>
  </form>
  <Sanity />
  <Prismic />

 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import Sanity from './components/Sanity.vue'
import Prismic from './components/Prismic.vue'


export default defineComponent({
  name: 'App',
  components: {
    Sanity,
    Prismic
  },
  setup() {
    // use global scope
    const { t, locale } = useI18n()
    return { t, locale }
  }
})
</script>

<style scoped>
form {
  margin-top: 48px;
}

label {
  margin-right: 8px;
}
</style>