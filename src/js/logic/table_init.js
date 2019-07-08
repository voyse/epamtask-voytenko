import { DAL } from '../entities/dal.js';
import { Table } from '../entities/table.js';
import { templates } from '../utils/templates.js';
import { constants } from '../utils/constants.js';

export const tableObj = (function () {
    "use strict";
    const tableObj = new Table(
        constants.staticDomElements.$mainContainer,
        constants.staticDomElements.$modalContainer,
        {
            table: templates.table,
            content: templates.content,
            delete: templates.delete,
            edit: templates.edit,            
            error: templates.error,
        },
        new DAL());
    return tableObj;
}());