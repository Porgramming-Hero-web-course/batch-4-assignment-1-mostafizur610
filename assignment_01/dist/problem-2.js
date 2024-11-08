"use strict";
function removeDuplicates(numbers) {
    return numbers.filter(function (num, index) { return numbers.indexOf(num) === index; });
}
