import { ComputedRef } from 'vue-demi'
declare function useClipboard (): {
    text: ComputedRef<string>
    copy: (val: string) => Promise<void>
}