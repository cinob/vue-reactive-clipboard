<template>
  <p @click="copy(content)"> {{ content }} </p>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useClipboard } from '../lib/main'
const { text, copy } = useClipboard()

const content = ref('click me to copy!')
watchEffect(() => {
  if (text.value) {
    console.log('copy successed: ' + text.value)
  }
})
</script>
