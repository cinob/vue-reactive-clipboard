<template>
  <p @click="copy(content)"> {{ content }} </p>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue-demi'
import { useClipboard } from 'vue-reactive-clipboard'
const { text, copy } = useClipboard()

const content = ref('click me to copy!')
watchEffect(() => {
  if (text.value) {
    console.log('copy successed: ' + text.value)
  }
})
</script>
