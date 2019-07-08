import { helpers } from '../utils/helpers.js';
import { constants } from '../utils/constants.js';

export const Table = (function () {
    'use strict';
    const dynamicDomClasses = constants.dynamicDomElementsClasses;
    return class Table {
        constructor($tableContainer, $modalContainer, templates, DAL) {
            this.$tableContainer = $tableContainer;
            this.$modalContainer = $modalContainer;
            this.tmp = templates.table;
            this.content = templates.content;
            this.deleteModal = templates.delete;
            this.editModal = templates.edit;
            this.errorTemplate = templates.error;
            this.$contentContainer = {};
            this.DAL = DAL;
            this.products = [];
            this.cache;
            ;

            const loading = this.DAL.getProducts(),
                self = this;

            loading.then(
                result => {
                    const inputObj = JSON.parse(result);
                    self.products = inputObj;
                    self.init();
                },
                error => {
                    self.callErrorBox();
                }
            );
        };

        add(name, price, count) {
            const newProd = {
                name: name,
                price: price,
                count: count                
            },
                self = this,
                promise = this.DAL.add(JSON.stringify(newProd));

            promise.then(
                result => {
                    newProd.id = JSON.parse(result);
                    self.products.push(newProd);
                    if (self.cache !== undefined) {
                        self.cache.push(newProd);
                    }
                    self.addToScreen(newProd);
                    if (self.cache !== undefined) {
                        self.search();
                    }
                },
                error => {
                    self.callErrorBox();
                });
        };

        edit(id, name, price, count) {
            const newProd = {
                id: id,
                name: name,
                price: price,
                count: count
            },
                self = this,
                promise = this.DAL.edit(JSON.stringify(newProd));
            promise.then(
                result => {
                    for (let i = 0; i < self.products.length; i++) {
                        if (self.products[i].id === +id) {
                            self.products[i] = newProd;
                            break;
                        }
                    }
                    self.replaceOnScreen(newProd);
                },
                error => {
                    self.callErrorBox();
                });
        };

        delete(id) {
            const self = this,
                promise = this.DAL.delete(JSON.stringify({ id: id }));
            promise.then(
                resolve => {
                    if (self.cache === undefined) {
                        self.products.forEach(product => {
                            if (product.id === id) {
                                self.products.splice(self.products.indexOf(product), 1);
                            }
                        });
                    }
                    else {
                        self.cache.forEach(product => {
                            if (product.id === id) {
                                self.cache.splice(self.cache.indexOf(product), 1);
                            }
                        });
                        self.products.forEach(product => {
                            if (product.id === id) {
                                self.products.splice(self.products.indexOf(product), 1);
                            }
                        });
                    }

                    self.removeModal();
                    self.deleteFromScreen(id);
                },
                reject => {
                    self.callErrorBox();
                }
            );
        }

        render() {
            let result = {};
            this.$contentContainer.html('');
            for (let i in this.products) {
                result = this.content({ product: this.products[i], toDollars: helpers.formatMoney });
                this.$contentContainer.append(result);
            }
        };
        
        deleteFromScreen(id) {
            $(dynamicDomClasses.tableItem + id).remove();
        }

        addToScreen(product) {
            const result = this.content({ product: product, toDollars: helpers.formatMoney });
            this.$contentContainer.append(result);
        }

        replaceOnScreen(product) {
            const result = this.content({ product: product, toDollars: helpers.formatMoney });
            $(dynamicDomClasses.tableItem + product.id).replaceWith(result);
        }

        sort(param, isReverced) {
            const newArray = helpers.sortBy(this.products, param, isReverced);
            this.products = newArray;
            this.render();
        };

        search() {
            const str = $(dynamicDomClasses.searchInput).val();
            if (str !== '') {
                if (this.cache === undefined) {
                    this.cache = this.products;
                }
                this.products = [];
                this.cache.forEach(product => {
                    if (product.name.toLowerCase().search(new RegExp(str.toLowerCase())) !== -1) {
                        this.products.push(product);
                    }
                });
            }
            else {
                if (this.cache !== undefined) {
                    this.products = this.cache;
                    this.cache = undefined;
                }
            }

            this.render();
        }

        init() {
            const result = this.tmp();
            this.$tableContainer.html(result);

            this.$contentContainer = $(dynamicDomClasses.tableContentContainer);

            this.render();
        };

        callDeleteModal(id) {
            const result = this.deleteModal({ id: id });
            this.$modalContainer.html(result);
        }

        removeModal(id) {
            this.$modalContainer.html('');
        }

        callEditModal(id) {
            var result,
                editProduct = {
                    id: null,
                    name: '',
                    count: 0,
                    price: 0
                };
           
            if (id === 0) {                
                result = this.editModal({
                    product: editProduct,
                    toDollars: helpers.formatMoney
                });
            }
            else {
                this.products.forEach(product => {
                    if (product.id === id) {
                        editProduct = product;
                    }
                });                
                result = this.editModal({ product: editProduct, toDollars: helpers.formatMoney });
            }

            this.$modalContainer.html(result);            
        }
        
        callErrorBox() {
            const result = this.errorTemplate();
            this.$modalContainer.append(result);
        }

        editOrAdd(id, name, price, count) {
            if (id === '') {
                this.add(name, price, count);
            }
            else {
                this.edit(+id, name, price, count);
            }

            this.removeModal();
        }
    };
}());

