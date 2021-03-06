import { ref } from 'vue-demi'

export function useClipboard () {
  const text = ref('')

  async function copy (val: string) {
    try {
      await navigator.permissions.query({name:'clipboard-write'})
      await window.navigator.clipboard.writeText(val)
    } catch (error) {
      const input = document.createElement('input')
      input.value = val
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
    text.value = val
  }
  
  return {
    text,
    copy
  }
}