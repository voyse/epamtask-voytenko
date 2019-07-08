export let helpers = (function () {
    'use strict';

    function hideElem(elem) {
        elem.addClass("none");
    }

    function showElem(elem) {
        elem.removeClass("none");
    }

    function sortBy(array, param, isReverced) {
        if (isReverced) {
            return array.sort((a, b) => { 
                return a[param] > b[param] ? 1 : -1
            });
        } else {
            return array.sort((a, b) => { 
                return a[param] < b[param] ? 1 : -1
            });
        }
    }

    function formatMoney(num) {
        const i = String(parseInt(Math.abs(Number(num) || 0).toFixed(2))),
            j = (i.length) > 3 ? i.length % 3 : 0;

        return (j ? '$' + i.substr(0, j) + ',' : '$') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ',') + ('.' + Math.abs(num - i).toFixed(2).slice(2));
    }

    function unFormatMoney(str) {
        var a = str.search(/[^\d\$\.\,]/g);
        if (str.search(/[^\d\$\.\,]/g) !== -1) {
            return str
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

    return helpers = {
        formatMoney: formatMoney,
        unFormatMoney: unFormatMoney,
        hideElem: hideElem,
        showElem: showElem,
        sortBy: sortBy
    };
}())

