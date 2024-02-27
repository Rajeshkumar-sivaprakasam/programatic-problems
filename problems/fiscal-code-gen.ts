/*
Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
Examples
fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

    fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
    }) ➞ "MSOMKY28A16"
Notes
Code letters must be uppercase.
Date of birth is given in D/M/YYYY format.
The conversion table for months is already in the starting code.
Y is not a vowel.

*/

const months: { [key: number]: string } = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'H',
    7: 'L',
    8: 'M',
    9: 'P',
    10: 'R',
    11: 'S',
    12: 'T',
};

export function fiscalCode(person: { [key: string]: string }) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];
    const arrResult: string[] = [];
    const getSurename = (surname: string): string => {
        const arr = splitToArray(surname);
        return getConstVowelsStr(arr);
    };
    const getName = (name: string): string => {
        const arr = splitToArray(name);
        return getConstVowelsStr(arr);
    };
    const getLastFiveChars = (dob: string, gender: string): string => {
        const arr: string[] = [];
        const { date, month, year } = splitDOB(dob);
        arr.push(year[1]);
        arr.push(year[0]);
        arr.push(monthChar(month));
        let genderValue: number | string = 0;
        genderValue = gender === 'F' ? date + 40 : date < 9 ? `${0}${date}`.toString() : date;
        arr.push(genderValue.toString());
        return arr.join('');
    };

    const splitToArray = (arr: string): string[] => {
        return arr.split('');
    };

    const getVowelsConstans = (
        arr: string[],
    ): {
        vowels: string[];
        consonents: string[];
    } => {
        const vowels: string[] = [];
        const consonents: string[] = [];
        arr.forEach(function (element) {
            vowelsList.includes(element.toLowerCase()) ? vowels.push(element) : consonents.push(element);
        });
        return {
            vowels,
            consonents,
        };
    };

    const monthChar = (str: string) => {
        return months[parseInt(str)] || 'A';
    };

    const splitDOB = (
        str: string,
    ): {
        date: number;
        month: string;
        year: string[];
    } => {
        const splitStr = str.split('/');
        // const [date, month, year] = splitStr.map((e) => {
        //     parseInt(e);
        // });
        const date = parseInt(splitStr[0]);
        const month = splitStr[1];
        const year = splitStr[2].split('').reverse();
        return {
            date,
            month,
            year,
        };
    };

    const getConstVowelsStr = (arr: string[]) => {
        const { vowels, consonents } = getVowelsConstans(arr);

        if (consonents.length >= 3) return consonents.splice(0, 3).join('').toUpperCase();
        if (consonents.length + vowels.length < 3) {
            const arr: string[] = [];
            consonents.forEach((e) => arr.push(e));
            vowels.forEach((e) => {
                if (arr.length < 3) {
                    arr.push(e);
                }
            });

            while (arr.length < 3) {
                arr.push('x');
            }
            return arr.join('').toUpperCase();
        }
        if (consonents.length < 3 && vowelsList.length > 0) {
            const arr: string[] = [];
            consonents.forEach((e) => arr.push(e));
            vowels.forEach((e) => {
                if (arr.length < 3) {
                    arr.push(e.toUpperCase());
                }
            });
            return arr.join('').toUpperCase();
        }

        return '';
    };

    arrResult.push(getSurename(person.surname));
    arrResult.push(getName(person.name));
    arrResult.push(getLastFiveChars(person.dob, person.gender));
    return arrResult.join('');
}
