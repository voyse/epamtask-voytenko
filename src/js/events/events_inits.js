import { handlers } from '../events/handlers.js';
import { constants } from '../utils/constants.js';
(function () {
    'use strict';
    const eventListeners = constants.eventListeners,
        $tableContainer = constants.staticDomElements.$mainContainer,
        $modalContainer = constants.staticDomElements.$modalContainer;
    $tableContainer.on('submit', eventListeners.searchForm, handlers.search);
    $tableContainer.on('click', eventListeners.sortArrows.name.up, handlers.sortNameUp);
    $tableContainer.on('click', eventListeners.sortArrows.name.down, handlers.sortNameDown);
    $tableContainer.on('click', eventListeners.sortArrows.price.up, handlers.sortPriceUp);
    $tableContainer.on('click', eventListeners.sortArrows.price.down, handlers.sortPriceDown);
    $tableContainer.on('click', eventListeners.deleteButton, handlers.callDeleteModal);
    $tableContainer.on('click', eventListeners.editAddButton, handlers.callEditModal);
    $modalContainer.on('click', eventListeners.closeButton, handlers.removeModal);
    $modalContainer.on('click', eventListeners.deleteConsent, handlers.deleteProduct);
    $modalContainer.on('submit', eventListeners.editForm, handlers.editOrAdd);
    $modalContainer.on('focus', eventListeners.priceInput, handlers.unFormatMoney);
    $modalContainer.on('blur', eventListeners.priceInput, handlers.formatMoney);
    $modalContainer.on('change', eventListeners.editForm, handlers.onlineValidation);
}());