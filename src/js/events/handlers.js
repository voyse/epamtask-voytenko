import { tableObj } from '../logic/table_init.js';
import { helpers } from '../utils/helpers.js';
import { Validator } from '../utils/validator.js';
import { constants } from '../utils/constants.js';

export let handlers = (function () {
    'use strict';
    const validator = new Validator({
        name: [constants.validatorRules.notEmpty, constants.validatorRules.maxLength15],
        count: [constants.validatorRules.Number, constants.validatorRules.onlyNumbers],
        price: [constants.validatorRules.Number],
    }),
        sortArrows = constants.dynamicDomElementsClasses.sortArrows,
        dynamicDomClasses = constants.dynamicDomElementsClasses;

    function search() {
        event.preventDefault();
        tableObj.search();
    }

    function sortNameUp() {
        tableObj.sort(constants.sortParameters.name);
        $(sortArrows.name.up).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.name.down).removeClass(dynamicDomClasses.displayNone);
    }

    function sortNameDown() {
        tableObj.sort(constants.sortParameters.name, true);
        $(sortArrows.name.down).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.name.up).removeClass(dynamicDomClasses.displayNone);
    }

    function sortPriceUp() {
        tableObj.sort(constants.sortParameters.price);
        $(sortArrows.price.up).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.price.down).removeClass(dynamicDomClasses.displayNone);
    }

    function sortPriceDown() {
        tableObj.sort(constants.sortParameters.price, true);
        $(sortArrows.price.down).addClass(dynamicDomClasses.displayNone);
        $(sortArrows.price.up).removeClass(dynamicDomClasses.displayNone);
    }

    function callDeleteModal() {
        const el = event.target,
            id = el.value;
        tableObj.callDeleteModal(id);
    }

    function removeModal() {
        tableObj.removeModal();
    }

    function deleteProduct() {
        const el = event.target,
            id = el.value;
        tableObj.delete(+id);
        tableObj.removeModal();
    }

    function callEditModal() {
        const e = event,
            el = event.target,
            id = el.value || parseInt(el.getAttribute(dynamicDomClasses.dataIdAttibute));
        e.preventDefault();
        tableObj.callEditModal(+id);
    }

    function editOrAdd() {
        const e = event,
            form = event.target,
            id = form.elements[constants.domElementsNames.editForm.id].value,
            name = form.elements[constants.domElementsNames.editForm.name].value,
            price = helpers.unFormatMoney(form.elements[constants.domElementsNames.editForm.price].value),
            count = form.elements[constants.domElementsNames.editForm.count].value;

        e.preventDefault();

        if (!onlineValidation()) {
            return false;
        }
        tableObj.editOrAdd(id, name, price, count);

        return false;
    }
    
    function formatMoney() {
        const el = event.target,
            value = el.value;
        if (validator.validate({ price: value })) {
            return;
        }
        el.value = helpers.formatMoney(value);
    }

    function unFormatMoney() {
        const el = event.target,
            value = el.value;
        el.value = helpers.unFormatMoney(value);
    }


    function validation(data) {
        if (validator.validate(data)) {
            let flag = 0;
            validator.messages.forEach(msg => {
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
        const dataSources = {
            name: $(dynamicDomClasses.editFormElements.name),
            price: $(dynamicDomClasses.editFormElements.price),
            count: $(dynamicDomClasses.editFormElements.count),            
        },
            name = dataSources.name.val(),
            count = dataSources.count.val(),
            price = dataSources.price.val(),
            data = {
                name,
                count,
                price: helpers.unFormatMoney(price),
            };
        for (let el in dataSources) {
            dataSources[el].removeClass(dynamicDomClasses.redBorder),
                $(dynamicDomClasses.errorClass + el).text('');
        }

        return validation(data);
    }

    return handlers = {
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
        onlineValidation: onlineValidation,        
    };

}());