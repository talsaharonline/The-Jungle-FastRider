
let newModifiedArray = [];

export const generatePIN = () => {

    let firstFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    let secondFourDigitNumber = Math.floor(1000 + Math.random() * 9000);

    let firstLetter = convertNumberToASCIILetter(firstFourDigitNumber);
    let secondLetter = convertNumberToASCIILetter(secondFourDigitNumber);

    let PIN = "JN-" + firstFourDigitNumber + "-" + secondFourDigitNumber + "-" + firstLetter + secondLetter;

    // For testing and development you can copy the generated PIN from the console.
    console.log(PIN);

};

const convertNumberToASCIILetter = (fourDigitNumber) => {

    let splittedNumberArray = Array.from(fourDigitNumber.toString()).map(Number);
    let newMultipliedNumber = 0;

    newModifiedArray = [];

    // Check number location and calculate accordingly
    for (let i = 0; i < splittedNumberArray.length; i++) {

        if (i % 2 === 0) {

            newMultipliedNumber = splittedNumberArray[i] * 1;
            checkIfTwoDigitNumber(newMultipliedNumber);

        } else {

            newMultipliedNumber = splittedNumberArray[i] * 2;
            checkIfTwoDigitNumber(newMultipliedNumber);

        };

    };

    let sumModifiedNumbers = 0;

    for (let i = 0; i < newModifiedArray.length; i++) {

        sumModifiedNumbers += newModifiedArray[i];

    };

    // Preperation before ASCII
    sumModifiedNumbers = (sumModifiedNumbers % 26) + 65;

    // ACSII conversion
    let finalLetter = String.fromCharCode(sumModifiedNumbers);

    return finalLetter;

};


const checkIfTwoDigitNumber = (newMultipliedNumber) => {

    if (newMultipliedNumber.length <= 1) {

        newModifiedArray.push(newMultipliedNumber);

    } else {

        let twoDigitNumberSumArray = Array.from(newMultipliedNumber.toString()).map(Number);
        let newTwoDigitSumNumber = 0;

        for (let i = 0; i < twoDigitNumberSumArray.length; i++) {

            newTwoDigitSumNumber += twoDigitNumberSumArray[i];

        };

        newModifiedArray.push(newTwoDigitSumNumber);

    };

};