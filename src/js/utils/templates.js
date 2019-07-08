export let templates = (function () {
    'use strict';

    return templates = {
        table: _.template(document.getElementById('table-template').innerHTML),
        content: _.template(document.getElementById('table-content-template').innerHTML),
        delete: _.template(document.getElementById('delete-modal-template').innerHTML),
        edit: _.template(document.getElementById('edit-modal-template').innerHTML),
        error: _.template(document.getElementById('error-box-template').innerHTML),
    };

}());