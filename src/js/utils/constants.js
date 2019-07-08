export let constants = (function(){
    'use strict';

    const staticDomElements = {
        $mainContainer: $('.main-container'),
        $modalContainer: $('.modal-container'),
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
            name:{
                up: '.name-sort-up',
                down: '.name-sort-down'
            },
            price:{
                up: '.price-sort-up',
                down: '.price-sort-down'
            }
        },
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
            name:{
                up: '.name-sort-up',
                down: '.name-sort-down'
            },
            price:{
                up: '.price-sort-up',
                down: '.price-sort-down'
            }
        },
        editFormElements:{
            id:'.form-edit .id',
            name:'.form-edit .name',
            price: '.form-edit .price',
            count: '.form-edit .count',
        },
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
    }
   
    return {
        staticDomElements, 
        dynamicDomElementsClasses,
        validatorRules,
        sortParameters,
        domElementsNames,
        eventListeners,
    };

}());