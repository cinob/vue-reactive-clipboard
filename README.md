# vue-reactive-clipboard

A minisize vue2/3 reactive clipboard

## Install

Install with [yarn](https://yarnpkg.com):

  ```bash
  $ yarn add vue-reactive-clipboard
  ```

Install with [npm](https://npmjs.com):

  ```bash
  $ npm i vue-reactive-clipboard --save
  ```

## Usage

### `Vue3`

```html
<template>
  <p @click="copy(content)"> {{ content }} </p>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useClipboard } from 'vue-reactive-clipboard'
const { text, copy } = useClipboard()

const content = ref('click me to copy!')
watchEffect(() => {
  if (text.value) {
    console.log('copy successed: ' + text.value)
  }
})
</script>
```
### `Vue2`

```html
<template>
  <div>
    <p @click="copy(content)"> {{ content }} </p>
  </div>
</template>

<script>
import { ref, watchEffect, defineComponent } from '@vue/composition-api'
import { useClipboard } from 'vue-reactive-clipboard'
export default defineComponent({
  setup () {
    const { text, copy } = useClipboard()
    const content = ref('click me to copy!')
    watchEffect(() => {
      if (text.value) {
        console.log('copy successed: ' + text.value)
      }
    })
    return {
      content,
      copy
    }
  }
})
</script>
</script>
```