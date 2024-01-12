import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        cartCount: 0  
    }),

    actions: {
        addProduct(product) {
            this.products.push({ ...product, cartCount: 0 }); 
        },
        removeProduct(index) {
            this.cartCount -= this.products[index].cartCount; 
            this.products.splice(index, 1);
        },
        addToCart() {
            this.cartCount++;
        }
    }
});