import { defineStore } from 'pinia';
import { GlobalState } from '../interface';

export const GlobalStore = defineStore({
  id: 'GlobalState',
  state: (): GlobalState => ({
    //global component size
    assemblySize: 'default',
    language: '',
  }),
});
