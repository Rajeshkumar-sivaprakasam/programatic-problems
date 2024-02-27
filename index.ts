import { fiscalCode, lengthOfLongestSubstring, majorityElement, minMatchTrueFalse } from './problems';
import { findUnique, findUniqueNo } from './problems/find-unique';

// console.log(lengthOfLongestSubstring('abcabcbd'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(majorityElement([3, 3, 3, 3, 3, 3, 31, 1, 2, 2, 12, 1, 21, 2, 1, 1, 1]));
// console.log(findUnique([2, 3, 2, 4, 5, 6, 5, 7]));
// console.log(findUniqueNo([2, 3, 2, 4, 5, 6, 5, 7]));

// console.log(minMatchTrueFalse([true, false, false, true, false]));
// console.log(minMatchTrueFalse([false, false, false, false]));
// console.log(minMatchTrueFalse([]));

// expected op -> ➞ "DBTMTT00A01" => EDBTMTT1
console.log(
    fiscalCode({
        name: 'Mickey',
        surname: 'Mouse',
        gender: 'M',
        dob: '16/1/1928',
    }),
);
// expected op -> ➞ "MSOMKY28A16" => MSOUMCK82A0
console.log(
    fiscalCode({
        name: 'Matt',
        surname: 'Edabit',
        gender: 'M',
        dob: '1/1/1900',
    }),
);

console.log(
    fiscalCode({
        name: 'Helen',
        surname: 'Yu',
        gender: 'F',
        dob: '1/12/1950',
    }),
);
