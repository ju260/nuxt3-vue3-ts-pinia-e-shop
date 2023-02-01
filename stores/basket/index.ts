import { defineStore } from 'pinia'
import Product from '@/types/product';

function callApi (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

interface State {
    items: Product[]
  }
  
  export const useBasket = defineStore('basket', {
    state: (): State => {
      return {
        items: [],
      }
    },
    actions: {
      async fetchItems () {
        try {
          await callApi(3000)
          const { data }  = await useFetch(`http://${window.location.host}/cart.json`);
          this.items = Object.values(data.value.products)
        } catch (error) {
          console.error(error)
          throw error
        }
      },
    
      async updateItem ({ itemRef, patch }) {
        try {
          await callApi(1000) // l'api doit renvoyer l'item mis a jour
          const updatedItem = this.items.filter(item => item.reference === itemRef)
          if (!updatedItem.length) return
          Object.assign(updatedItem[0], patch)
        } catch (error) {
          console.error('error during updateItem', error)
          throw error
        }
      },
      async deleteItem ({ itemRef }) {
        try {
          await callApi(1000) // le produit doit etre delete du panier coté api
          this.items = this.items.filter(item => item.reference !== itemRef)
        } catch (error) {
          console.error('error during deleteItem', error)
          throw error
        }
      }
    },
  })
  