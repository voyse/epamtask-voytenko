import { Product } from './product.js';

export const DAL = (function () {
    'use strict';
    return class DAL {
        constructor() {
            this.curId = 3;

            this.products = [
                new Product(
                    1,
                    'Product 1',
                    205440.5,
                    4,
                    ),
                new Product(
                    2,
                    'Product 2',
                    40056013.37,
                    25,
                    ),
                new Product(
                    3,
                    'Product 3',
                    50,
                    354,
                    )
            ];
        
        }

        getProducts() {
            const self = this,
                promise = new Promise((resolve, reject) => {
                    resolve(JSON.stringify(self.products));
                });

            return promise;
        }
        
        delete(idContainer) {
            const id = JSON.parse(idContainer).id,
                products = this.products,
                promise = new Promise((resolve, reject) => {
                    products.forEach(product => {
                        if (product.id === id) {
                            products.splice(products.indexOf(product), 1);
                        }
                    });

                    resolve(JSON.stringify(id));
                })

            return promise;
        }

        edit(newProduct) {
            const prod = JSON.parse(newProduct),
                self = this,
                promise = new Promise((resolve, reject) => {
                    self.products.forEach(product => {
                        if (product.id === +prod.id) {
                            product = prod;
                        }
                    });

                    resolve(JSON.stringify(prod.id));
                });

            return promise;
        }

        add(newProductJSON) {
            const productInfo = JSON.parse(newProductJSON),
                newProduct = new Product(
                    this.getNextID(),
                    productInfo.name,
                    productInfo.price,
                    productInfo.count,
                    ),
                self = this,
                promise = new Promise((resolve, reject) => {
                    self.products.push(newProduct);

                    resolve(JSON.stringify(self.curId));
                });
            return promise;
        }

        getNextID() {
            this.curId += 1;
            return this.curId;
        }
    }

}());