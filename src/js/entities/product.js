export const Product = (function () {
    'use strict';

    return class Product {
        constructor(id, name, price, count) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.count = count;
        }
    };
}())

