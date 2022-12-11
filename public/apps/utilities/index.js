"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsePhoneNumber = exports.generateDateTime = void 0;
const generateDateTime = () => {
    const date = new Date();
    return date.toUTCString();
};
exports.generateDateTime = generateDateTime;
const ParsePhoneNumber = (phone) => {
    phone = phone.trim();
    phone = phone.replace(/-/g, '');
    phone = phone.replace(/ /g, '');
    phone = phone.replace(/\+/g, '');
    if (phone.substr(0, 1) == '0') {
        phone = '62' + phone.substr(1, phone.length - 1);
    }
    else if (phone.substr(0, 3) == '+62') {
        phone = '62' + phone.substr(3, phone.length - 1);
    }
    return phone;
};
exports.ParsePhoneNumber = ParsePhoneNumber;
