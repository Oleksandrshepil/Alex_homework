"use strickt"
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[gmail|yahoo]+\.(com)$/;
var trustedEmails = arr.filter(function (obj) {
    return emailRegex.test(obj.email);
});
console.log(trustedEmails);