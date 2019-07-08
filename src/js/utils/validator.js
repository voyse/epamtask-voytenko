export const Validator = (function () {
    'use strict';

    return class Validator {
        constructor(config) {
            this.config = config;
            this.types = {
                isNotEmpty: {
                    validate: function (value) {
                        return value.trim() !== '';
                    },
                    instructions: 'Cant be empty',
                },
                maxLength15: {
                    validate: function (value) {
                        return value.length <= 15;
                    },

                    instructions: 'Cant be longer than 15 symbols',
                },               
                isNumber: {
                    validate: function (value) {
                        return !(isNaN(value) || value < 0 || value.indexOf(',') !== -1);
                    },

                    instructions: 'Should be a positive number',
                },
                onlyNumbers: {
                    validate: function (value) {
                        const regex = /[^0-9]/g
                        return !(regex.test(value));
                    },

                    instructions: 'Should be a integer',
                }

            };
            this.messages = [];
        };

        validate(data) {
            var i, msg, type, checker, result_ok;

            this.messages = [];
            for (i in data) {
                if (data.hasOwnProperty(i)) {
                    type = this.config[i];
                    for (let j = 0; j < type.length; j++) {
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
        };

        hasErrors() {
            return this.messages.length !== 0;
        };

    };
}());

