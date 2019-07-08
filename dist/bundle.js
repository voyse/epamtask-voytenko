/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var constants = exports.constants = function () {
    'use strict';

    var staticDomElements = {
        $mainContainer: $('.main-container'),
        $modalContainer: $('.modal-container')
    },
        eventListeners = {
        searchForm: '.search-form',
        deleteButton: '.delete-btn',
        editAddButton: '.add-edit',
        closeButton: '.close-btn',
        deleteConsent: '.delete-yes',
        editForm: '.form-edit',
        priceInput: '.form-edit .price',
        sortArrows: {
            name: {
                up: '.name-sort-up',
                down: '.name-sort-down'
            },
            price: {
                up: '.price-sort-up',
                down: '.price-sort-down'
            }
        }
    },
        dynamicDomElementsClasses = {
        tableItem: '.table-item-',
        searchInput: '.search-form .search-input',
        tableContentContainer: '.table-content-container',
        dataIdAttibute: 'data-id',
        editForm: '.form-edit ',
        displayNone: 'none',
        redBorder: 'danger',
        errorClass: '.error-',
        sortArrows: {
            name: {
                up: '.name-sort-up',
                down: '.name-sort-down'
            },
            price: {
                up: '.price-sort-up',
                down: '.price-sort-down'
            }
        },
        editFormElements: {
            id: '.form-edit .id',
            name: '.form-edit .name',
            price: '.form-edit .price',
            count: '.form-edit .count'
        }
    },
        domElementsNames = {
        editForm: {
            id: 'id',
            name: 'name',
            price: 'price',
            count: 'count'
        }
    },
        validatorRules = {
        notEmpty: 'isNotEmpty',
        maxLength15: 'maxLength15',
        Number: 'isNumber',
        onlyNumbers: 'onlyNumbers'
    },
        sortParameters = {
        name: 'name',
        price: 'price'
    };

    return {
        staticDomElements: staticDomElements,
        dynamicDomElementsClasses: dynamicDomElementsClasses,
        validatorRules: validatorRules,
        sortParameters: sortParameters,
        domElementsNames: domElementsNames,
        eventListeners: eventListeners
    };
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var helpers = exports.helpers = function () {
    'use strict';

    function hideElem(elem) {
        elem.addClass("none");
    }

    function showElem(elem) {
        elem.removeClass("none");
    }

    function sortBy(array, param, isReverced) {
        if (isReverced) {
            return array.sort(function (a, b) {
                return a[param] > b[param] ? 1 : -1;
            });
        } else {
            return array.sort(function (a, b) {
                return a[param] < b[param] ? 1 : -1;
            });
        }
    }

    function formatMoney(num) {
        var i = String(parseInt(Math.abs(Number(num) || 0).toFixed(2))),
            j = i.length > 3 ? i.length % 3 : 0;

        return (j ? '$' + i.substr(0, j) + ',' : '$') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ',') + ('.' + Math.abs(num - i).toFixed(2).slice(2));
    }

    function unFormatMoney(str) {
        var a = str.search(/[^\d\$\.\,]/g);
        if (str.search(/[^\d\$\.\,]/g) !== -1) {
            return str;
        }
        return parseFloat(str.replace(/[\$\,]/g, "")).toFixed(2);
    }

    function numberToDollars(number) {
        var str = number.toString().split(/\./g),
            resultStr = "$",
            numArray = [];

        while (+str[0] >= 1) {
            numArray.push((+str[0] % 1000).toFixed(0));
            str[0] /= 1000;
        }

        while (numArray.length > 1) {

            resultStr += numArray.pop().toString() + ',';
        }

        resultStr += numArray.pop().toString();

        if (str.length > 1) {
            resultStr += "." + str[1].toString();
        }
        return resultStr;
    }

    return exports.helpers = helpers = {
        formatMoney: formatMoney,
        unFormatMoney: unFormatMoney,
        hideElem: hideElem,
        showElem: showElem,
        sortBy: sortBy
    };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _events_inits = __webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _handlers = __webpack_require__(4);

var _constants = __webpack_require__(0);

(function () {
    'use strict';

    var eventListeners = _constants.constants.eventListeners,
        $tableContainer = _constants.constants.staticDomElements.$mainContainer,
        $modalContainer = _constants.constants.staticDomElements.$modalContainer;
    $tableContainer.on('submit', eventListeners.searchForm, _handlers.handlers.search);
    $tableContainer.on('click', eventListeners.sortArrows.name.up, _handlers.handlers.sortNameUp);
    $tableContainer.on('click', eventListeners.sortArrows.name.down, _handlers.handlers.sortNameDown);
    $tableContainer.on('click', eventListeners.sortArrows.price.up, _handlers.handlers.sortPriceUp);
    $tableContainer.on('click', eventListeners.sortArrows.price.down, _handlers.handlers.sortPriceDown);
    $tableContainer.on('click', eventListeners.deleteButton, _handlers.handlers.callDeleteModal);
    $tableContainer.on('click', eventListeners.editAddButton, _handlers.handlers.callEditModal);
    $modalContainer.on('click', eventListeners.closeButton, _handlers.handlers.removeModal);
    $modalContainer.on('click', eventListeners.deleteConsent, _handlers.handlers.deleteProduct);
    $modalContainer.on('submit', eventListeners.editForm, _handlers.handlers.editOrAdd);
    $modalContainer.on('focus', eventListeners.priceInput, _handlers.handlers.unFormatMoney);
    $modalContainer.on('blur', eventListeners.priceInput, _handlers.handlers.formatMoney);
    $modalContainer.on('change', eventListeners.editForm, _handlers.handlers.onlineValidation);
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handlers = undefined;

var _table_init = __webpack_require__(5);

var _helpers = __webpack_require__(1);

var _validator = __webpack_require__(10);

var _constants = __webpack_require__(0);

var handlers = exports.handlers = function () {
    'use strict';

    var validator = new _validator.Validator({
        name: [_constants.constants.validatorRules.notEmpty, _constants.constants.validatorRules.maxLength15],
        count: [_constants.constants.validatorRules.Number, _constants.constants.validatorRules.onlyNumbers],
        price: [_constants.constants.validatorRules.Number]
    }),
        sortArrows = _constants.constants.dynamicDomElementsClasses.sortArrows,
        dynamicDomClasses = _constants.constants.dynamicDomElementsClasses;

    function search() {
        event.preventDefault();
        _table_init.tableObj.search();
    }

    function sortNameUp() {
        _table_init.tableObj.sort(_constants.constants.sortParameters.name);
        $(sortArrows.name.up).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.name.down).removeClass(dynamicDomClasses.displayNone);
    }

    function sortNameDown() {
        _table_init.tableObj.sort(_constants.constants.sortParameters.name, true);
        $(sortArrows.name.down).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.name.up).removeClass(dynamicDomClasses.displayNone);
    }

    function sortPriceUp() {
        _table_init.tableObj.sort(_constants.constants.sortParameters.price);
        $(sortArrows.price.up).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.price.down).removeClass(dynamicDomClasses.displayNone);
    }

    function sortPriceDown() {
        _table_init.tableObj.sort(_constants.constants.sortParameters.price, true);
        $(sortArrows.price.down).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.price.up).removeClass(dynamicDomClasses.displayNone);
    }

    function callDeleteModal() {
        var el = event.target,
            id = el.value;
        _table_init.tableObj.callDeleteModal(id);
    }

    function removeModal() {
        _table_init.tableObj.removeModal();
    }

    function deleteProduct() {
        var el = event.target,
            id = el.value;
        _table_init.tableObj.delete(+id);
        _table_init.tableObj.removeModal();
    }

    function callEditModal() {
        var e = event,
            el = event.target,
            id = el.value || parseInt(el.getAttribute(dynamicDomClasses.dataIdAttibute));
        e.preventDefault();
        _table_init.tableObj.callEditModal(+id);
    }

    function editOrAdd() {
        var e = event,
            form = event.target,
            id = form.elements[_constants.constants.domElementsNames.editForm.id].value,
            name = form.elements[_constants.constants.domElementsNames.editForm.name].value,
            price = _helpers.helpers.unFormatMoney(form.elements[_constants.constants.domElementsNames.editForm.price].value),
            count = form.elements[_constants.constants.domElementsNames.editForm.count].value;

        e.preventDefault();

        if (!onlineValidation()) {
            return false;
        }
        _table_init.tableObj.editOrAdd(id, name, price, count);

        return false;
    }

    function formatMoney() {
        var el = event.target,
            value = el.value;
        if (validator.validate({ price: value })) {
            return;
        }
        el.value = _helpers.helpers.formatMoney(value);
    }

    function unFormatMoney() {
        var el = event.target,
            value = el.value;
        el.value = _helpers.helpers.unFormatMoney(value);
    }

    function validation(data) {
        if (validator.validate(data)) {
            var flag = 0;
            validator.messages.forEach(function (msg) {
                $(dynamicDomClasses.errorClass + msg.name).text("* " + msg.msg);
                if (flag === 0) {
                    $(dynamicDomClasses.editForm + '.' + msg.name).addClass(dynamicDomClasses.redBorder).focus();
                    flag = 1;
                }
                $(dynamicDomClasses.editForm + '.' + msg.name).addClass(dynamicDomClasses.redBorder);
            });
            return false;
        }
        return true;
    }

    function onlineValidation() {
        var dataSources = {
            name: $(dynamicDomClasses.editFormElements.name),
            price: $(dynamicDomClasses.editFormElements.price),
            count: $(dynamicDomClasses.editFormElements.count)
        },
            name = dataSources.name.val(),
            count = dataSources.count.val(),
            price = dataSources.price.val(),
            data = {
            name: name,
            count: count,
            price: _helpers.helpers.unFormatMoney(price)
        };
        for (var el in dataSources) {
            dataSources[el].removeClass(dynamicDomClasses.redBorder), $(dynamicDomClasses.errorClass + el).text('');
        }

        return validation(data);
    }

    return exports.handlers = handlers = {
        search: search,
        sortNameUp: sortNameUp,
        sortNameDown: sortNameDown,
        sortPriceUp: sortPriceUp,
        sortPriceDown: sortPriceDown,
        callDeleteModal: callDeleteModal,
        removeModal: removeModal,
        deleteProduct: deleteProduct,
        callEditModal: callEditModal,
        editOrAdd: editOrAdd,
        formatMoney: formatMoney,
        unFormatMoney: unFormatMoney,
        onlineValidation: onlineValidation
    };
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tableObj = undefined;

var _dal = __webpack_require__(6);

var _table = __webpack_require__(8);

var _templates = __webpack_require__(9);

var _constants = __webpack_require__(0);

var tableObj = exports.tableObj = function () {
    "use strict";

    var tableObj = new _table.Table(_constants.constants.staticDomElements.$mainContainer, _constants.constants.staticDomElements.$modalContainer, {
        table: _templates.templates.table,
        content: _templates.templates.content,
        delete: _templates.templates.delete,
        edit: _templates.templates.edit,
        error: _templates.templates.error
    }, new _dal.DAL());
    return tableObj;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DAL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _product = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DAL = exports.DAL = function () {
    'use strict';

    return function () {
        function DAL() {
            _classCallCheck(this, DAL);

            this.curId = 3;

            this.products = [new _product.Product(1, 'Product 1', 205440.5, 4), new _product.Product(2, 'Product 2', 40056013.37, 25), new _product.Product(3, 'Product 3', 50, 354)];
        }

        _createClass(DAL, [{
            key: 'getProducts',
            value: function getProducts() {
                var self = this,
                    promise = new Promise(function (resolve, reject) {
                    resolve(JSON.stringify(self.products));
                });

                return promise;
            }
        }, {
            key: 'delete',
            value: function _delete(idContainer) {
                var id = JSON.parse(idContainer).id,
                    products = this.products,
                    promise = new Promise(function (resolve, reject) {
                    products.forEach(function (product) {
                        if (product.id === id) {
                            products.splice(products.indexOf(product), 1);
                        }
                    });

                    resolve(JSON.stringify(id));
                });

                return promise;
            }
        }, {
            key: 'edit',
            value: function edit(newProduct) {
                var prod = JSON.parse(newProduct),
                    self = this,
                    promise = new Promise(function (resolve, reject) {
                    self.products.forEach(function (product) {
                        if (product.id === +prod.id) {
                            product = prod;
                        }
                    });

                    resolve(JSON.stringify(prod.id));
                });

                return promise;
            }
        }, {
            key: 'add',
            value: function add(newProductJSON) {
                var productInfo = JSON.parse(newProductJSON),
                    newProduct = new _product.Product(this.getNextID(), productInfo.name, productInfo.price, productInfo.count),
                    self = this,
                    promise = new Promise(function (resolve, reject) {
                    self.products.push(newProduct);

                    resolve(JSON.stringify(self.curId));
                });
                return promise;
            }
        }, {
            key: 'getNextID',
            value: function getNextID() {
                this.curId += 1;
                return this.curId;
            }
        }]);

        return DAL;
    }();
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = exports.Product = function () {
    'use strict';

    return function Product(id, name, price, count) {
        _classCallCheck(this, Product);

        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    };
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(1);

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = exports.Table = function () {
    'use strict';

    var dynamicDomClasses = _constants.constants.dynamicDomElementsClasses;
    return function () {
        function Table($tableContainer, $modalContainer, templates, DAL) {
            _classCallCheck(this, Table);

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

            var loading = this.DAL.getProducts(),
                self = this;

            loading.then(function (result) {
                var inputObj = JSON.parse(result);
                self.products = inputObj;
                self.init();
            }, function (error) {
                self.callErrorBox();
            });
        }

        _createClass(Table, [{
            key: 'add',
            value: function add(name, price, count) {
                var newProd = {
                    name: name,
                    price: price,
                    count: count
                },
                    self = this,
                    promise = this.DAL.add(JSON.stringify(newProd));

                promise.then(function (result) {
                    newProd.id = JSON.parse(result);
                    self.products.push(newProd);
                    if (self.cache !== undefined) {
                        self.cache.push(newProd);
                    }
                    self.addToScreen(newProd);
                    if (self.cache !== undefined) {
                        self.search();
                    }
                }, function (error) {
                    self.callErrorBox();
                });
            }
        }, {
            key: 'edit',
            value: function edit(id, name, price, count) {
                var newProd = {
                    id: id,
                    name: name,
                    price: price,
                    count: count
                },
                    self = this,
                    promise = this.DAL.edit(JSON.stringify(newProd));
                promise.then(function (result) {
                    for (var i = 0; i < self.products.length; i++) {
                        if (self.products[i].id === +id) {
                            self.products[i] = newProd;
                            break;
                        }
                    }
                    self.replaceOnScreen(newProd);
                }, function (error) {
                    self.callErrorBox();
                });
            }
        }, {
            key: 'delete',
            value: function _delete(id) {
                var self = this,
                    promise = this.DAL.delete(JSON.stringify({ id: id }));
                promise.then(function (resolve) {
                    if (self.cache === undefined) {
                        self.products.forEach(function (product) {
                            if (product.id === id) {
                                self.products.splice(self.products.indexOf(product), 1);
                            }
                        });
                    } else {
                        self.cache.forEach(function (product) {
                            if (product.id === id) {
                                self.cache.splice(self.cache.indexOf(product), 1);
                            }
                        });
                        self.products.forEach(function (product) {
                            if (product.id === id) {
                                self.products.splice(self.products.indexOf(product), 1);
                            }
                        });
                    }

                    self.removeModal();
                    self.deleteFromScreen(id);
                }, function (reject) {
                    self.callErrorBox();
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var result = {};
                this.$contentContainer.html('');
                for (var i in this.products) {
                    result = this.content({ product: this.products[i], toDollars: _helpers.helpers.formatMoney });
                    this.$contentContainer.append(result);
                }
            }
        }, {
            key: 'deleteFromScreen',
            value: function deleteFromScreen(id) {
                $(dynamicDomClasses.tableItem + id).remove();
            }
        }, {
            key: 'addToScreen',
            value: function addToScreen(product) {
                var result = this.content({ product: product, toDollars: _helpers.helpers.formatMoney });
                this.$contentContainer.append(result);
            }
        }, {
            key: 'replaceOnScreen',
            value: function replaceOnScreen(product) {
                var result = this.content({ product: product, toDollars: _helpers.helpers.formatMoney });
                $(dynamicDomClasses.tableItem + product.id).replaceWith(result);
            }
        }, {
            key: 'sort',
            value: function sort(param, isReverced) {
                var newArray = _helpers.helpers.sortBy(this.products, param, isReverced);
                this.products = newArray;
                this.render();
            }
        }, {
            key: 'search',
            value: function search() {
                var _this = this;

                var str = $(dynamicDomClasses.searchInput).val();
                if (str !== '') {
                    if (this.cache === undefined) {
                        this.cache = this.products;
                    }
                    this.products = [];
                    this.cache.forEach(function (product) {
                        if (product.name.toLowerCase().search(new RegExp(str.toLowerCase())) !== -1) {
                            _this.products.push(product);
                        }
                    });
                } else {
                    if (this.cache !== undefined) {
                        this.products = this.cache;
                        this.cache = undefined;
                    }
                }

                this.render();
            }
        }, {
            key: 'init',
            value: function init() {
                var result = this.tmp();
                this.$tableContainer.html(result);

                this.$contentContainer = $(dynamicDomClasses.tableContentContainer);

                this.render();
            }
        }, {
            key: 'callDeleteModal',
            value: function callDeleteModal(id) {
                var result = this.deleteModal({ id: id });
                this.$modalContainer.html(result);
            }
        }, {
            key: 'removeModal',
            value: function removeModal(id) {
                this.$modalContainer.html('');
            }
        }, {
            key: 'callEditModal',
            value: function callEditModal(id) {
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
                        toDollars: _helpers.helpers.formatMoney
                    });
                } else {
                    this.products.forEach(function (product) {
                        if (product.id === id) {
                            editProduct = product;
                        }
                    });
                    result = this.editModal({ product: editProduct, toDollars: _helpers.helpers.formatMoney });
                }

                this.$modalContainer.html(result);
            }
        }, {
            key: 'callErrorBox',
            value: function callErrorBox() {
                var result = this.errorTemplate();
                this.$modalContainer.append(result);
            }
        }, {
            key: 'editOrAdd',
            value: function editOrAdd(id, name, price, count) {
                if (id === '') {
                    this.add(name, price, count);
                } else {
                    this.edit(+id, name, price, count);
                }

                this.removeModal();
            }
        }]);

        return Table;
    }();
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var templates = exports.templates = function () {
    'use strict';

    return exports.templates = templates = {
        table: _.template(document.getElementById('table-template').innerHTML),
        content: _.template(document.getElementById('table-content-template').innerHTML),
        delete: _.template(document.getElementById('delete-modal-template').innerHTML),
        edit: _.template(document.getElementById('edit-modal-template').innerHTML),
        error: _.template(document.getElementById('error-box-template').innerHTML)
    };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = exports.Validator = function () {
    'use strict';

    return function () {
        function Validator(config) {
            _classCallCheck(this, Validator);

            this.config = config;
            this.types = {
                isNotEmpty: {
                    validate: function validate(value) {
                        return value.trim() !== '';
                    },
                    instructions: 'Cant be empty'
                },
                maxLength15: {
                    validate: function validate(value) {
                        return value.length <= 15;
                    },

                    instructions: 'Cant be longer than 15 symbols'
                },
                isNumber: {
                    validate: function validate(value) {
                        return !(isNaN(value) || value < 0 || value.indexOf(',') !== -1);
                    },

                    instructions: 'Should be a positive number'
                },
                onlyNumbers: {
                    validate: function validate(value) {
                        var regex = /[^0-9]/g;
                        return !regex.test(value);
                    },

                    instructions: 'Should be a integer'
                }

            };
            this.messages = [];
        }

        _createClass(Validator, [{
            key: 'validate',
            value: function validate(data) {
                var i, msg, type, checker, result_ok;

                this.messages = [];
                for (i in data) {
                    if (data.hasOwnProperty(i)) {
                        type = this.config[i];
                        for (var j = 0; j < type.length; j++) {
                            checker = this.types[type[j]];
                            if (!type) {
                                continue;
                            }
                            if (!checker) {
                                throw {
                                    name: 'ValidationError',
                                    message: 'No handler to validate type' + type
                                };
                            }
                            result_ok = checker.validate(data[i]);
                            if (!result_ok) {
                                msg = checker.instructions;
                                this.messages.push({ name: i, msg: msg });
                            }
                        }
                    }
                }

                return this.hasErrors();
            }
        }, {
            key: 'hasErrors',
            value: function hasErrors() {
                return this.messages.length !== 0;
            }
        }]);

        return Validator;
    }();
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQ3YWI4OTI5MDc0M2EzZDBmOGQiLCJ3ZWJwYWNrOi8vL3NyYy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovLy9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2V2ZW50cy9ldmVudHNfaW5pdHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9ldmVudHMvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9sb2dpYy90YWJsZV9pbml0LmpzIiwid2VicGFjazovLy9zcmMvanMvZW50aXRpZXMvZGFsLmpzIiwid2VicGFjazovLy9zcmMvanMvZW50aXRpZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2VudGl0aWVzL3RhYmxlLmpzIiwid2VicGFjazovLy9zcmMvanMvdXRpbHMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9zcmMvanMvdXRpbHMvdmFsaWRhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFkN2FiODkyOTA3NDNhM2QwZjhkIiwiZXhwb3J0IGxldCBjb25zdGFudHMgPSAoZnVuY3Rpb24oKXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBjb25zdCBzdGF0aWNEb21FbGVtZW50cyA9IHtcbiAgICAgICAgJG1haW5Db250YWluZXI6ICQoJy5tYWluLWNvbnRhaW5lcicpLFxuICAgICAgICAkbW9kYWxDb250YWluZXI6ICQoJy5tb2RhbC1jb250YWluZXInKSxcbiAgICB9LFxuXG4gICAgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgICAgIHNlYXJjaEZvcm06ICcuc2VhcmNoLWZvcm0nLFxuICAgICAgICBkZWxldGVCdXR0b246ICcuZGVsZXRlLWJ0bicsXG4gICAgICAgIGVkaXRBZGRCdXR0b246ICcuYWRkLWVkaXQnLFxuICAgICAgICBjbG9zZUJ1dHRvbjogJy5jbG9zZS1idG4nLFxuICAgICAgICBkZWxldGVDb25zZW50OiAnLmRlbGV0ZS15ZXMnLFxuICAgICAgICBlZGl0Rm9ybTogJy5mb3JtLWVkaXQnLFxuICAgICAgICBwcmljZUlucHV0OiAnLmZvcm0tZWRpdCAucHJpY2UnLFxuICAgICAgICBzb3J0QXJyb3dzOiB7XG4gICAgICAgICAgICBuYW1lOntcbiAgICAgICAgICAgICAgICB1cDogJy5uYW1lLXNvcnQtdXAnLFxuICAgICAgICAgICAgICAgIGRvd246ICcubmFtZS1zb3J0LWRvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2U6e1xuICAgICAgICAgICAgICAgIHVwOiAnLnByaWNlLXNvcnQtdXAnLFxuICAgICAgICAgICAgICAgIGRvd246ICcucHJpY2Utc29ydC1kb3duJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkeW5hbWljRG9tRWxlbWVudHNDbGFzc2VzID0ge1xuICAgICAgICB0YWJsZUl0ZW06ICcudGFibGUtaXRlbS0nLFxuICAgICAgICBzZWFyY2hJbnB1dDogJy5zZWFyY2gtZm9ybSAuc2VhcmNoLWlucHV0JyxcbiAgICAgICAgdGFibGVDb250ZW50Q29udGFpbmVyOiAnLnRhYmxlLWNvbnRlbnQtY29udGFpbmVyJywgICAgICAgIFxuICAgICAgICBkYXRhSWRBdHRpYnV0ZTogJ2RhdGEtaWQnLFxuICAgICAgICBlZGl0Rm9ybTogJy5mb3JtLWVkaXQgJyxcbiAgICAgICAgZGlzcGxheU5vbmU6ICdub25lJyxcbiAgICAgICAgcmVkQm9yZGVyOiAnZGFuZ2VyJyxcbiAgICAgICAgZXJyb3JDbGFzczogJy5lcnJvci0nLFxuICAgICAgICBzb3J0QXJyb3dzOiB7XG4gICAgICAgICAgICBuYW1lOntcbiAgICAgICAgICAgICAgICB1cDogJy5uYW1lLXNvcnQtdXAnLFxuICAgICAgICAgICAgICAgIGRvd246ICcubmFtZS1zb3J0LWRvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2U6e1xuICAgICAgICAgICAgICAgIHVwOiAnLnByaWNlLXNvcnQtdXAnLFxuICAgICAgICAgICAgICAgIGRvd246ICcucHJpY2Utc29ydC1kb3duJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0Rm9ybUVsZW1lbnRzOntcbiAgICAgICAgICAgIGlkOicuZm9ybS1lZGl0IC5pZCcsXG4gICAgICAgICAgICBuYW1lOicuZm9ybS1lZGl0IC5uYW1lJyxcbiAgICAgICAgICAgIHByaWNlOiAnLmZvcm0tZWRpdCAucHJpY2UnLFxuICAgICAgICAgICAgY291bnQ6ICcuZm9ybS1lZGl0IC5jb3VudCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRvbUVsZW1lbnRzTmFtZXMgPSB7XG4gICAgICAgIGVkaXRGb3JtOiB7XG4gICAgICAgICAgICBpZDogJ2lkJyxcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIHByaWNlOiAncHJpY2UnLFxuICAgICAgICAgICAgY291bnQ6ICdjb3VudCdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0b3JSdWxlcyA9IHtcbiAgICAgICAgbm90RW1wdHk6ICdpc05vdEVtcHR5JyxcbiAgICAgICAgbWF4TGVuZ3RoMTU6ICdtYXhMZW5ndGgxNScsXG4gICAgICAgIE51bWJlcjogJ2lzTnVtYmVyJyxcbiAgICAgICAgb25seU51bWJlcnM6ICdvbmx5TnVtYmVycydcbiAgICB9LFxuXG4gICAgc29ydFBhcmFtZXRlcnMgPSB7XG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgcHJpY2U6ICdwcmljZSdcbiAgICB9XG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0aWNEb21FbGVtZW50cywgXG4gICAgICAgIGR5bmFtaWNEb21FbGVtZW50c0NsYXNzZXMsXG4gICAgICAgIHZhbGlkYXRvclJ1bGVzLFxuICAgICAgICBzb3J0UGFyYW1ldGVycyxcbiAgICAgICAgZG9tRWxlbWVudHNOYW1lcyxcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMsXG4gICAgfTtcblxufSgpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3V0aWxzL2NvbnN0YW50cy5qcyIsImV4cG9ydCBsZXQgaGVscGVycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZnVuY3Rpb24gaGlkZUVsZW0oZWxlbSkge1xuICAgICAgICBlbGVtLmFkZENsYXNzKFwibm9uZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93RWxlbShlbGVtKSB7XG4gICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoXCJub25lXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvcnRCeShhcnJheSwgcGFyYW0sIGlzUmV2ZXJjZWQpIHtcbiAgICAgICAgaWYgKGlzUmV2ZXJjZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5zb3J0KChhLCBiKSA9PiB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBhW3BhcmFtXSA+IGJbcGFyYW1dID8gMSA6IC0xXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5zb3J0KChhLCBiKSA9PiB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBhW3BhcmFtXSA8IGJbcGFyYW1dID8gMSA6IC0xXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbmV5KG51bSkge1xuICAgICAgICBjb25zdCBpID0gU3RyaW5nKHBhcnNlSW50KE1hdGguYWJzKE51bWJlcihudW0pIHx8IDApLnRvRml4ZWQoMikpKSxcbiAgICAgICAgICAgIGogPSAoaS5sZW5ndGgpID4gMyA/IGkubGVuZ3RoICUgMyA6IDA7XG5cbiAgICAgICAgcmV0dXJuIChqID8gJyQnICsgaS5zdWJzdHIoMCwgaikgKyAnLCcgOiAnJCcpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArICcsJykgKyAoJy4nICsgTWF0aC5hYnMobnVtIC0gaSkudG9GaXhlZCgyKS5zbGljZSgyKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5Gb3JtYXRNb25leShzdHIpIHtcbiAgICAgICAgdmFyIGEgPSBzdHIuc2VhcmNoKC9bXlxcZFxcJFxcLlxcLF0vZyk7XG4gICAgICAgIGlmIChzdHIuc2VhcmNoKC9bXlxcZFxcJFxcLlxcLF0vZykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyLnJlcGxhY2UoL1tcXCRcXCxdL2csIFwiXCIpKS50b0ZpeGVkKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG51bWJlclRvRG9sbGFycyhudW1iZXIpIHtcbiAgICAgICAgdmFyIHN0ciA9IG51bWJlci50b1N0cmluZygpLnNwbGl0KC9cXC4vZyksXG4gICAgICAgICAgICByZXN1bHRTdHIgPSBcIiRcIixcbiAgICAgICAgICAgIG51bUFycmF5ID0gW107XG5cbiAgICAgICAgd2hpbGUgKCtzdHJbMF0gPj0gMSkge1xuICAgICAgICAgICAgbnVtQXJyYXkucHVzaCgoK3N0clswXSAlIDEwMDApLnRvRml4ZWQoMCkpO1xuICAgICAgICAgICAgc3RyWzBdIC89IDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAobnVtQXJyYXkubGVuZ3RoID4gMSkge1xuXG4gICAgICAgICAgICByZXN1bHRTdHIgKz0gbnVtQXJyYXkucG9wKCkudG9TdHJpbmcoKSArICcsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFN0ciArPSBudW1BcnJheS5wb3AoKS50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmVzdWx0U3RyICs9IFwiLlwiICsgc3RyWzFdLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVscGVycyA9IHtcbiAgICAgICAgZm9ybWF0TW9uZXk6IGZvcm1hdE1vbmV5LFxuICAgICAgICB1bkZvcm1hdE1vbmV5OiB1bkZvcm1hdE1vbmV5LFxuICAgICAgICBoaWRlRWxlbTogaGlkZUVsZW0sXG4gICAgICAgIHNob3dFbGVtOiBzaG93RWxlbSxcbiAgICAgICAgc29ydEJ5OiBzb3J0QnlcbiAgICB9O1xufSgpKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3V0aWxzL2hlbHBlcnMuanMiLCJpbXBvcnQgeyBldmVudEluaXRzIH0gZnJvbSAnLi9ldmVudHMvZXZlbnRzX2luaXRzLmpzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbWFpbi5qcyIsImltcG9ydCB7IGhhbmRsZXJzIH0gZnJvbSAnLi4vZXZlbnRzL2hhbmRsZXJzLmpzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IGNvbnN0YW50cy5ldmVudExpc3RlbmVycyxcbiAgICAgICAgJHRhYmxlQ29udGFpbmVyID0gY29uc3RhbnRzLnN0YXRpY0RvbUVsZW1lbnRzLiRtYWluQ29udGFpbmVyLFxuICAgICAgICAkbW9kYWxDb250YWluZXIgPSBjb25zdGFudHMuc3RhdGljRG9tRWxlbWVudHMuJG1vZGFsQ29udGFpbmVyO1xuICAgICR0YWJsZUNvbnRhaW5lci5vbignc3VibWl0JywgZXZlbnRMaXN0ZW5lcnMuc2VhcmNoRm9ybSwgaGFuZGxlcnMuc2VhcmNoKTtcbiAgICAkdGFibGVDb250YWluZXIub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcnMuc29ydEFycm93cy5uYW1lLnVwLCBoYW5kbGVycy5zb3J0TmFtZVVwKTtcbiAgICAkdGFibGVDb250YWluZXIub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcnMuc29ydEFycm93cy5uYW1lLmRvd24sIGhhbmRsZXJzLnNvcnROYW1lRG93bik7XG4gICAgJHRhYmxlQ29udGFpbmVyLm9uKCdjbGljaycsIGV2ZW50TGlzdGVuZXJzLnNvcnRBcnJvd3MucHJpY2UudXAsIGhhbmRsZXJzLnNvcnRQcmljZVVwKTtcbiAgICAkdGFibGVDb250YWluZXIub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcnMuc29ydEFycm93cy5wcmljZS5kb3duLCBoYW5kbGVycy5zb3J0UHJpY2VEb3duKTtcbiAgICAkdGFibGVDb250YWluZXIub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcnMuZGVsZXRlQnV0dG9uLCBoYW5kbGVycy5jYWxsRGVsZXRlTW9kYWwpO1xuICAgICR0YWJsZUNvbnRhaW5lci5vbignY2xpY2snLCBldmVudExpc3RlbmVycy5lZGl0QWRkQnV0dG9uLCBoYW5kbGVycy5jYWxsRWRpdE1vZGFsKTtcbiAgICAkbW9kYWxDb250YWluZXIub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcnMuY2xvc2VCdXR0b24sIGhhbmRsZXJzLnJlbW92ZU1vZGFsKTtcbiAgICAkbW9kYWxDb250YWluZXIub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcnMuZGVsZXRlQ29uc2VudCwgaGFuZGxlcnMuZGVsZXRlUHJvZHVjdCk7XG4gICAgJG1vZGFsQ29udGFpbmVyLm9uKCdzdWJtaXQnLCBldmVudExpc3RlbmVycy5lZGl0Rm9ybSwgaGFuZGxlcnMuZWRpdE9yQWRkKTtcbiAgICAkbW9kYWxDb250YWluZXIub24oJ2ZvY3VzJywgZXZlbnRMaXN0ZW5lcnMucHJpY2VJbnB1dCwgaGFuZGxlcnMudW5Gb3JtYXRNb25leSk7XG4gICAgJG1vZGFsQ29udGFpbmVyLm9uKCdibHVyJywgZXZlbnRMaXN0ZW5lcnMucHJpY2VJbnB1dCwgaGFuZGxlcnMuZm9ybWF0TW9uZXkpO1xuICAgICRtb2RhbENvbnRhaW5lci5vbignY2hhbmdlJywgZXZlbnRMaXN0ZW5lcnMuZWRpdEZvcm0sIGhhbmRsZXJzLm9ubGluZVZhbGlkYXRpb24pO1xufSgpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2V2ZW50cy9ldmVudHNfaW5pdHMuanMiLCJpbXBvcnQgeyB0YWJsZU9iaiB9IGZyb20gJy4uL2xvZ2ljL3RhYmxlX2luaXQuanMnO1xuaW1wb3J0IHsgaGVscGVycyB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMuanMnO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yLmpzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBsZXQgaGFuZGxlcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKHtcbiAgICAgICAgbmFtZTogW2NvbnN0YW50cy52YWxpZGF0b3JSdWxlcy5ub3RFbXB0eSwgY29uc3RhbnRzLnZhbGlkYXRvclJ1bGVzLm1heExlbmd0aDE1XSxcbiAgICAgICAgY291bnQ6IFtjb25zdGFudHMudmFsaWRhdG9yUnVsZXMuTnVtYmVyLCBjb25zdGFudHMudmFsaWRhdG9yUnVsZXMub25seU51bWJlcnNdLFxuICAgICAgICBwcmljZTogW2NvbnN0YW50cy52YWxpZGF0b3JSdWxlcy5OdW1iZXJdLFxuICAgIH0pLFxuICAgICAgICBzb3J0QXJyb3dzID0gY29uc3RhbnRzLmR5bmFtaWNEb21FbGVtZW50c0NsYXNzZXMuc29ydEFycm93cyxcbiAgICAgICAgZHluYW1pY0RvbUNsYXNzZXMgPSBjb25zdGFudHMuZHluYW1pY0RvbUVsZW1lbnRzQ2xhc3NlcztcblxuICAgIGZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFibGVPYmouc2VhcmNoKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29ydE5hbWVVcCgpIHtcbiAgICAgICAgdGFibGVPYmouc29ydChjb25zdGFudHMuc29ydFBhcmFtZXRlcnMubmFtZSk7XG4gICAgICAgICQoc29ydEFycm93cy5uYW1lLnVwKS5hZGRDbGFzcyhkeW5hbWljRG9tQ2xhc3Nlcy5kaXNwbGF5Tm9uZSk7XG4gICAgICAgICQoc29ydEFycm93cy5uYW1lLmRvd24pLnJlbW92ZUNsYXNzKGR5bmFtaWNEb21DbGFzc2VzLmRpc3BsYXlOb25lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzb3J0TmFtZURvd24oKSB7XG4gICAgICAgIHRhYmxlT2JqLnNvcnQoY29uc3RhbnRzLnNvcnRQYXJhbWV0ZXJzLm5hbWUsIHRydWUpO1xuICAgICAgICAkKHNvcnRBcnJvd3MubmFtZS5kb3duKS5hZGRDbGFzcyhkeW5hbWljRG9tQ2xhc3Nlcy5kaXNwbGF5Tm9uZSk7XG4gICAgICAgICQoc29ydEFycm93cy5uYW1lLnVwKS5yZW1vdmVDbGFzcyhkeW5hbWljRG9tQ2xhc3Nlcy5kaXNwbGF5Tm9uZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29ydFByaWNlVXAoKSB7XG4gICAgICAgIHRhYmxlT2JqLnNvcnQoY29uc3RhbnRzLnNvcnRQYXJhbWV0ZXJzLnByaWNlKTtcbiAgICAgICAgJChzb3J0QXJyb3dzLnByaWNlLnVwKS5hZGRDbGFzcyhkeW5hbWljRG9tQ2xhc3Nlcy5kaXNwbGF5Tm9uZSk7XG4gICAgICAgICQoc29ydEFycm93cy5wcmljZS5kb3duKS5yZW1vdmVDbGFzcyhkeW5hbWljRG9tQ2xhc3Nlcy5kaXNwbGF5Tm9uZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29ydFByaWNlRG93bigpIHtcbiAgICAgICAgdGFibGVPYmouc29ydChjb25zdGFudHMuc29ydFBhcmFtZXRlcnMucHJpY2UsIHRydWUpO1xuICAgICAgICAkKHNvcnRBcnJvd3MucHJpY2UuZG93bikuYWRkQ2xhc3MoZHluYW1pY0RvbUNsYXNzZXMuZGlzcGxheU5vbmUpO1xuICAgICAgICAkKHNvcnRBcnJvd3MucHJpY2UudXApLnJlbW92ZUNsYXNzKGR5bmFtaWNEb21DbGFzc2VzLmRpc3BsYXlOb25lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsRGVsZXRlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaWQgPSBlbC52YWx1ZTtcbiAgICAgICAgdGFibGVPYmouY2FsbERlbGV0ZU1vZGFsKGlkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcbiAgICAgICAgdGFibGVPYmoucmVtb3ZlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KCkge1xuICAgICAgICBjb25zdCBlbCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGlkID0gZWwudmFsdWU7XG4gICAgICAgIHRhYmxlT2JqLmRlbGV0ZSgraWQpO1xuICAgICAgICB0YWJsZU9iai5yZW1vdmVNb2RhbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxFZGl0TW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IGUgPSBldmVudCxcbiAgICAgICAgICAgIGVsID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaWQgPSBlbC52YWx1ZSB8fCBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoZHluYW1pY0RvbUNsYXNzZXMuZGF0YUlkQXR0aWJ1dGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0YWJsZU9iai5jYWxsRWRpdE1vZGFsKCtpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdE9yQWRkKCkge1xuICAgICAgICBjb25zdCBlID0gZXZlbnQsXG4gICAgICAgICAgICBmb3JtID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaWQgPSBmb3JtLmVsZW1lbnRzW2NvbnN0YW50cy5kb21FbGVtZW50c05hbWVzLmVkaXRGb3JtLmlkXS52YWx1ZSxcbiAgICAgICAgICAgIG5hbWUgPSBmb3JtLmVsZW1lbnRzW2NvbnN0YW50cy5kb21FbGVtZW50c05hbWVzLmVkaXRGb3JtLm5hbWVdLnZhbHVlLFxuICAgICAgICAgICAgcHJpY2UgPSBoZWxwZXJzLnVuRm9ybWF0TW9uZXkoZm9ybS5lbGVtZW50c1tjb25zdGFudHMuZG9tRWxlbWVudHNOYW1lcy5lZGl0Rm9ybS5wcmljZV0udmFsdWUpLFxuICAgICAgICAgICAgY291bnQgPSBmb3JtLmVsZW1lbnRzW2NvbnN0YW50cy5kb21FbGVtZW50c05hbWVzLmVkaXRGb3JtLmNvdW50XS52YWx1ZTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCFvbmxpbmVWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZU9iai5lZGl0T3JBZGQoaWQsIG5hbWUsIHByaWNlLCBjb3VudCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBmb3JtYXRNb25leSgpIHtcbiAgICAgICAgY29uc3QgZWwgPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlO1xuICAgICAgICBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKHsgcHJpY2U6IHZhbHVlIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWwudmFsdWUgPSBoZWxwZXJzLmZvcm1hdE1vbmV5KHZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bkZvcm1hdE1vbmV5KCkge1xuICAgICAgICBjb25zdCBlbCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU7XG4gICAgICAgIGVsLnZhbHVlID0gaGVscGVycy51bkZvcm1hdE1vbmV5KHZhbHVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRpb24oZGF0YSkge1xuICAgICAgICBpZiAodmFsaWRhdG9yLnZhbGlkYXRlKGRhdGEpKSB7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IDA7XG4gICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xuICAgICAgICAgICAgICAgICQoZHluYW1pY0RvbUNsYXNzZXMuZXJyb3JDbGFzcyArIG1zZy5uYW1lKS50ZXh0KFwiKiBcIiArIG1zZy5tc2cpO1xuICAgICAgICAgICAgICAgIGlmIChmbGFnID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZHluYW1pY0RvbUNsYXNzZXMuZWRpdEZvcm0gKyAnLicgKyBtc2cubmFtZSkuYWRkQ2xhc3MoZHluYW1pY0RvbUNsYXNzZXMucmVkQm9yZGVyKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBmbGFnID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChkeW5hbWljRG9tQ2xhc3Nlcy5lZGl0Rm9ybSArICcuJyArIG1zZy5uYW1lKS5hZGRDbGFzcyhkeW5hbWljRG9tQ2xhc3Nlcy5yZWRCb3JkZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25saW5lVmFsaWRhdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZXMgPSB7XG4gICAgICAgICAgICBuYW1lOiAkKGR5bmFtaWNEb21DbGFzc2VzLmVkaXRGb3JtRWxlbWVudHMubmFtZSksXG4gICAgICAgICAgICBwcmljZTogJChkeW5hbWljRG9tQ2xhc3Nlcy5lZGl0Rm9ybUVsZW1lbnRzLnByaWNlKSxcbiAgICAgICAgICAgIGNvdW50OiAkKGR5bmFtaWNEb21DbGFzc2VzLmVkaXRGb3JtRWxlbWVudHMuY291bnQpLCAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZSA9IGRhdGFTb3VyY2VzLm5hbWUudmFsKCksXG4gICAgICAgICAgICBjb3VudCA9IGRhdGFTb3VyY2VzLmNvdW50LnZhbCgpLFxuICAgICAgICAgICAgcHJpY2UgPSBkYXRhU291cmNlcy5wcmljZS52YWwoKSxcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBwcmljZTogaGVscGVycy51bkZvcm1hdE1vbmV5KHByaWNlKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGVsIGluIGRhdGFTb3VyY2VzKSB7XG4gICAgICAgICAgICBkYXRhU291cmNlc1tlbF0ucmVtb3ZlQ2xhc3MoZHluYW1pY0RvbUNsYXNzZXMucmVkQm9yZGVyKSxcbiAgICAgICAgICAgICAgICAkKGR5bmFtaWNEb21DbGFzc2VzLmVycm9yQ2xhc3MgKyBlbCkudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbihkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcnMgPSB7XG4gICAgICAgIHNlYXJjaDogc2VhcmNoLFxuICAgICAgICBzb3J0TmFtZVVwOiBzb3J0TmFtZVVwLFxuICAgICAgICBzb3J0TmFtZURvd246IHNvcnROYW1lRG93bixcbiAgICAgICAgc29ydFByaWNlVXA6IHNvcnRQcmljZVVwLFxuICAgICAgICBzb3J0UHJpY2VEb3duOiBzb3J0UHJpY2VEb3duLFxuICAgICAgICBjYWxsRGVsZXRlTW9kYWw6IGNhbGxEZWxldGVNb2RhbCxcbiAgICAgICAgcmVtb3ZlTW9kYWw6IHJlbW92ZU1vZGFsLFxuICAgICAgICBkZWxldGVQcm9kdWN0OiBkZWxldGVQcm9kdWN0LFxuICAgICAgICBjYWxsRWRpdE1vZGFsOiBjYWxsRWRpdE1vZGFsLFxuICAgICAgICBlZGl0T3JBZGQ6IGVkaXRPckFkZCxcbiAgICAgICAgZm9ybWF0TW9uZXk6IGZvcm1hdE1vbmV5LFxuICAgICAgICB1bkZvcm1hdE1vbmV5OiB1bkZvcm1hdE1vbmV5LFxuICAgICAgICBvbmxpbmVWYWxpZGF0aW9uOiBvbmxpbmVWYWxpZGF0aW9uLCAgICAgICAgXG4gICAgfTtcblxufSgpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2V2ZW50cy9oYW5kbGVycy5qcyIsImltcG9ydCB7IERBTCB9IGZyb20gJy4uL2VudGl0aWVzL2RhbC5qcyc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4uL2VudGl0aWVzL3RhYmxlLmpzJztcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uL3V0aWxzL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xuXG5leHBvcnQgY29uc3QgdGFibGVPYmogPSAoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGNvbnN0IHRhYmxlT2JqID0gbmV3IFRhYmxlKFxuICAgICAgICBjb25zdGFudHMuc3RhdGljRG9tRWxlbWVudHMuJG1haW5Db250YWluZXIsXG4gICAgICAgIGNvbnN0YW50cy5zdGF0aWNEb21FbGVtZW50cy4kbW9kYWxDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhYmxlOiB0ZW1wbGF0ZXMudGFibGUsXG4gICAgICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZXMuY29udGVudCxcbiAgICAgICAgICAgIGRlbGV0ZTogdGVtcGxhdGVzLmRlbGV0ZSxcbiAgICAgICAgICAgIGVkaXQ6IHRlbXBsYXRlcy5lZGl0LCAgICAgICAgICAgIFxuICAgICAgICAgICAgZXJyb3I6IHRlbXBsYXRlcy5lcnJvcixcbiAgICAgICAgfSxcbiAgICAgICAgbmV3IERBTCgpKTtcbiAgICByZXR1cm4gdGFibGVPYmo7XG59KCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbG9naWMvdGFibGVfaW5pdC5qcyIsImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnO1xuXG5leHBvcnQgY29uc3QgREFMID0gKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIGNsYXNzIERBTCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jdXJJZCA9IDM7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3QoXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0IDEnLFxuICAgICAgICAgICAgICAgICAgICAyMDU0NDAuNSxcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdChcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3QgMicsXG4gICAgICAgICAgICAgICAgICAgIDQwMDU2MDEzLjM3LFxuICAgICAgICAgICAgICAgICAgICAyNSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdChcbiAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3QgMycsXG4gICAgICAgICAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgICAgICAgICAzNTQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04uc3RyaW5naWZ5KHNlbGYucHJvZHVjdHMpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZShpZENvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBKU09OLnBhcnNlKGlkQ29udGFpbmVyKS5pZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLnNwbGljZShwcm9kdWN0cy5pbmRleE9mKHByb2R1Y3QpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnN0cmluZ2lmeShpZCkpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZWRpdChuZXdQcm9kdWN0KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kID0gSlNPTi5wYXJzZShuZXdQcm9kdWN0KSxcbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gK3Byb2QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0ID0gcHJvZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnN0cmluZ2lmeShwcm9kLmlkKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkKG5ld1Byb2R1Y3RKU09OKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SW5mbyA9IEpTT04ucGFyc2UobmV3UHJvZHVjdEpTT04pLFxuICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROZXh0SUQoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEluZm8ucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbmZvLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjdHMucHVzaChuZXdQcm9kdWN0KTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04uc3RyaW5naWZ5KHNlbGYuY3VySWQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TmV4dElEKCkge1xuICAgICAgICAgICAgdGhpcy5jdXJJZCArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VySWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn0oKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9lbnRpdGllcy9kYWwuanMiLCJleHBvcnQgY29uc3QgUHJvZHVjdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIGNsYXNzIFByb2R1Y3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgcHJpY2UsIGNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgICB9XG4gICAgfTtcbn0oKSlcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9lbnRpdGllcy9wcm9kdWN0LmpzIiwiaW1wb3J0IHsgaGVscGVycyB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMuanMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGNvbnN0IFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgY29uc3QgZHluYW1pY0RvbUNsYXNzZXMgPSBjb25zdGFudHMuZHluYW1pY0RvbUVsZW1lbnRzQ2xhc3NlcztcbiAgICByZXR1cm4gY2xhc3MgVGFibGUge1xuICAgICAgICBjb25zdHJ1Y3RvcigkdGFibGVDb250YWluZXIsICRtb2RhbENvbnRhaW5lciwgdGVtcGxhdGVzLCBEQUwpIHtcbiAgICAgICAgICAgIHRoaXMuJHRhYmxlQ29udGFpbmVyID0gJHRhYmxlQ29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy4kbW9kYWxDb250YWluZXIgPSAkbW9kYWxDb250YWluZXI7XG4gICAgICAgICAgICB0aGlzLnRtcCA9IHRlbXBsYXRlcy50YWJsZTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRlbXBsYXRlcy5jb250ZW50O1xuICAgICAgICAgICAgdGhpcy5kZWxldGVNb2RhbCA9IHRlbXBsYXRlcy5kZWxldGU7XG4gICAgICAgICAgICB0aGlzLmVkaXRNb2RhbCA9IHRlbXBsYXRlcy5lZGl0O1xuICAgICAgICAgICAgdGhpcy5lcnJvclRlbXBsYXRlID0gdGVtcGxhdGVzLmVycm9yO1xuICAgICAgICAgICAgdGhpcy4kY29udGVudENvbnRhaW5lciA9IHt9O1xuICAgICAgICAgICAgdGhpcy5EQUwgPSBEQUw7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgICAgICB0aGlzLmNhY2hlO1xuICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5EQUwuZ2V0UHJvZHVjdHMoKSxcbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgbG9hZGluZy50aGVuKFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0T2JqID0gSlNPTi5wYXJzZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y3RzID0gaW5wdXRPYmo7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxFcnJvckJveCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkKG5hbWUsIHByaWNlLCBjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvZCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgICAgICAgICAgICBjb3VudDogY291bnQgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLkRBTC5hZGQoSlNPTi5zdHJpbmdpZnkobmV3UHJvZCkpO1xuXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvZC5pZCA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9kdWN0cy5wdXNoKG5ld1Byb2QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhY2hlLnB1c2gobmV3UHJvZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRUb1NjcmVlbihuZXdQcm9kKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWFyY2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxFcnJvckJveCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVkaXQoaWQsIG5hbWUsIHByaWNlLCBjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvZCA9IHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXG4gICAgICAgICAgICAgICAgY291bnQ6IGNvdW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLkRBTC5lZGl0KEpTT04uc3RyaW5naWZ5KG5ld1Byb2QpKTtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYucHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnByb2R1Y3RzW2ldLmlkID09PSAraWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y3RzW2ldID0gbmV3UHJvZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcGxhY2VPblNjcmVlbihuZXdQcm9kKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsRXJyb3JCb3goKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBkZWxldGUoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLkRBTC5kZWxldGUoSlNPTi5zdHJpbmdpZnkoeyBpZDogaWQgfSkpO1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxuICAgICAgICAgICAgICAgIHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjdHMuc3BsaWNlKHNlbGYucHJvZHVjdHMuaW5kZXhPZihwcm9kdWN0KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhY2hlLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FjaGUuc3BsaWNlKHNlbGYuY2FjaGUuaW5kZXhPZihwcm9kdWN0KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjdHMuc3BsaWNlKHNlbGYucHJvZHVjdHMuaW5kZXhPZihwcm9kdWN0KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVsZXRlRnJvbVNjcmVlbihpZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxFcnJvckJveCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgICAgICB0aGlzLiRjb250ZW50Q29udGFpbmVyLmh0bWwoJycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb2R1Y3RzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb250ZW50KHsgcHJvZHVjdDogdGhpcy5wcm9kdWN0c1tpXSwgdG9Eb2xsYXJzOiBoZWxwZXJzLmZvcm1hdE1vbmV5IH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRlbnRDb250YWluZXIuYXBwZW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBkZWxldGVGcm9tU2NyZWVuKGlkKSB7XG4gICAgICAgICAgICAkKGR5bmFtaWNEb21DbGFzc2VzLnRhYmxlSXRlbSArIGlkKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2NyZWVuKHByb2R1Y3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY29udGVudCh7IHByb2R1Y3Q6IHByb2R1Y3QsIHRvRG9sbGFyczogaGVscGVycy5mb3JtYXRNb25leSB9KTtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRlbnRDb250YWluZXIuYXBwZW5kKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXBsYWNlT25TY3JlZW4ocHJvZHVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jb250ZW50KHsgcHJvZHVjdDogcHJvZHVjdCwgdG9Eb2xsYXJzOiBoZWxwZXJzLmZvcm1hdE1vbmV5IH0pO1xuICAgICAgICAgICAgJChkeW5hbWljRG9tQ2xhc3Nlcy50YWJsZUl0ZW0gKyBwcm9kdWN0LmlkKS5yZXBsYWNlV2l0aChyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc29ydChwYXJhbSwgaXNSZXZlcmNlZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBoZWxwZXJzLnNvcnRCeSh0aGlzLnByb2R1Y3RzLCBwYXJhbSwgaXNSZXZlcmNlZCk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gbmV3QXJyYXk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlYXJjaCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9ICQoZHluYW1pY0RvbUNsYXNzZXMuc2VhcmNoSW5wdXQpLnZhbCgpO1xuICAgICAgICAgICAgaWYgKHN0ciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKG5ldyBSZWdFeHAoc3RyLnRvTG93ZXJDYXNlKCkpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5jYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy50bXAoKTtcbiAgICAgICAgICAgIHRoaXMuJHRhYmxlQ29udGFpbmVyLmh0bWwocmVzdWx0KTtcblxuICAgICAgICAgICAgdGhpcy4kY29udGVudENvbnRhaW5lciA9ICQoZHluYW1pY0RvbUNsYXNzZXMudGFibGVDb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjYWxsRGVsZXRlTW9kYWwoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGVsZXRlTW9kYWwoeyBpZDogaWQgfSk7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbENvbnRhaW5lci5odG1sKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVNb2RhbChpZCkge1xuICAgICAgICAgICAgdGhpcy4kbW9kYWxDb250YWluZXIuaHRtbCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsRWRpdE1vZGFsKGlkKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgICAgIGVkaXRQcm9kdWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlkID09PSAwKSB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZWRpdE1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogZWRpdFByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgIHRvRG9sbGFyczogaGVscGVycy5mb3JtYXRNb25leVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmVkaXRNb2RhbCh7IHByb2R1Y3Q6IGVkaXRQcm9kdWN0LCB0b0RvbGxhcnM6IGhlbHBlcnMuZm9ybWF0TW9uZXkgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJG1vZGFsQ29udGFpbmVyLmh0bWwocmVzdWx0KTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY2FsbEVycm9yQm94KCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lcnJvclRlbXBsYXRlKCk7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbENvbnRhaW5lci5hcHBlbmQocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRPckFkZChpZCwgbmFtZSwgcHJpY2UsIGNvdW50KSB7XG4gICAgICAgICAgICBpZiAoaWQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobmFtZSwgcHJpY2UsIGNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCgraWQsIG5hbWUsIHByaWNlLCBjb3VudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCkpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2VudGl0aWVzL3RhYmxlLmpzIiwiZXhwb3J0IGxldCB0ZW1wbGF0ZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZXMgPSB7XG4gICAgICAgIHRhYmxlOiBfLnRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS10ZW1wbGF0ZScpLmlubmVySFRNTCksXG4gICAgICAgIGNvbnRlbnQ6IF8udGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWNvbnRlbnQtdGVtcGxhdGUnKS5pbm5lckhUTUwpLFxuICAgICAgICBkZWxldGU6IF8udGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1tb2RhbC10ZW1wbGF0ZScpLmlubmVySFRNTCksXG4gICAgICAgIGVkaXQ6IF8udGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtbW9kYWwtdGVtcGxhdGUnKS5pbm5lckhUTUwpLFxuICAgICAgICBlcnJvcjogXy50ZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItYm94LXRlbXBsYXRlJykuaW5uZXJIVE1MKSxcbiAgICB9O1xuXG59KCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvdXRpbHMvdGVtcGxhdGVzLmpzIiwiZXhwb3J0IGNvbnN0IFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIGNsYXNzIFZhbGlkYXRvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgICAgICB0aGlzLnR5cGVzID0ge1xuICAgICAgICAgICAgICAgIGlzTm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKSAhPT0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczogJ0NhbnQgYmUgZW1wdHknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoMTU6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA8PSAxNTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6ICdDYW50IGJlIGxvbmdlciB0aGFuIDE1IHN5bWJvbHMnLFxuICAgICAgICAgICAgICAgIH0sICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaXNOdW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEoaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgMCB8fCB2YWx1ZS5pbmRleE9mKCcsJykgIT09IC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6ICdTaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25seU51bWJlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSAvW14wLTldL2dcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhKHJlZ2V4LnRlc3QodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6ICdTaG91bGQgYmUgYSBpbnRlZ2VyJyxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFsaWRhdGUoZGF0YSkge1xuICAgICAgICAgICAgdmFyIGksIG1zZywgdHlwZSwgY2hlY2tlciwgcmVzdWx0X29rO1xuXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSB0aGlzLmNvbmZpZ1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0eXBlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VyID0gdGhpcy50eXBlc1t0eXBlW2pdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVmFsaWRhdGlvbkVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIGhhbmRsZXIgdG8gdmFsaWRhdGUgdHlwZScgKyB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdF9vayA9IGNoZWNrZXIudmFsaWRhdGUoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdF9vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IGNoZWNrZXIuaW5zdHJ1Y3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7IG5hbWU6IGksIG1zZzogbXNnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNFcnJvcnMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBoYXNFcnJvcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlcy5sZW5ndGggIT09IDA7XG4gICAgICAgIH07XG5cbiAgICB9O1xufSgpKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy91dGlscy92YWxpZGF0b3IuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBUkE7QUFMQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFuQkE7QUF6QkE7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFwREE7QUE4REE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTdEQTtBQXFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7Ozs7Ozs7O0FDcEVBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFnQkE7Ozs7Ozs7Ozs7Ozs7O0FDN0pBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFxQkE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUE0QkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBcUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsREE7QUFBQTtBQUFBO0FBcURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRUE7QUFBQTtBQUFBO0FBcUVBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBO0FBQUE7QUFBQTtBQXNGQTtBQUNBO0FBQ0E7QUF4RkE7QUFDQTtBQURBO0FBQUE7QUEyRkE7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXREQTtBQUFBO0FBQUE7QUF5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTlFQTtBQUFBO0FBQUE7QUFpRkE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFoSEE7QUFBQTtBQUFBO0FBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekhBO0FBQUE7QUFBQTtBQTRIQTtBQUNBO0FBN0hBO0FBQUE7QUFBQTtBQWdJQTtBQUNBO0FBQ0E7QUFsSUE7QUFBQTtBQUFBO0FBcUlBO0FBQ0E7QUFDQTtBQXZJQTtBQUFBO0FBQUE7QUEwSUE7QUFDQTtBQUNBO0FBQ0E7QUE3SUE7QUFBQTtBQUFBO0FBK0lBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEtBO0FBQUE7QUFBQTtBQXVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdLQTtBQUFBO0FBQUE7QUFnTEE7QUFDQTtBQUNBO0FBbExBO0FBQUE7QUFBQTtBQXFMQTtBQUNBO0FBdExBO0FBQUE7QUFBQTtBQXlMQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqTkE7QUFBQTtBQUFBO0FBb05BO0FBQ0E7QUFDQTtBQXROQTtBQUFBO0FBQUE7QUF5TkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpPQTtBQUNBO0FBREE7QUFBQTtBQW1PQTs7Ozs7Ozs7Ozs7O0FDek9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQXRCQTtBQStCQTtBQUNBO0FBQ0E7QUFwQ0E7QUFBQTtBQUFBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakVBO0FBQUE7QUFBQTtBQW9FQTtBQUNBO0FBckVBO0FBQ0E7QUFEQTtBQUFBO0FBd0VBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==