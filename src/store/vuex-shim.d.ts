// vuex-shim.d.ts
import { Store } from 'vuex'
import { StoreInterface } from '.'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<StoreInterface>;
  }
}
