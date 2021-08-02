import { Ref } from 'vue-demi'
declare function useClipboard (): {
    text: Ref<string>
    copy: (val: string) => Promise<void>
}