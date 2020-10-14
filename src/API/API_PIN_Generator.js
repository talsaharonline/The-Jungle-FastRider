
export const generatePIN = () => {

    // Create a random 4 digit numbers
    let firstFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    let secondFourDigitNumber = Math.floor(1000 + Math.random() * 9000);

    let PIN = "JN-" + firstFourDigitNumber + "-" + secondFourDigitNumber + "-" + convertToASCII(firstFourDigitNumber) + convertToASCII(secondFourDigitNumber);

    console.log(PIN);

};



const convertToASCII = (fourDigitNumber) => {

    // Split the number into array of digits
    let splittedNumberArray = Array.from(fourDigitNumber.toString()).map(Number);

    let modifiedArray = [];
    let sum = 0;

    for (let i = 0; i < splittedNumberArray.length; i++) {

        if (i === 1 || i === 3) {

            sum = splittedNumberArray[i] * 2;

            if (sum.length <= 1) {

                modifiedArray.push(sum);

            } else {

                let twoDigitsSumArray = Array.from(sum.toString()).map(Number);
                let finalSum = 0;

                for (let i = 0; i < twoDigitsSumArray.length; i++) {
                    finalSum += twoDigitsSumArray[i];
                }

                modifiedArray.push(finalSum);

            }

        } else if (i === 0 || i === 2)  {

            sum = splittedNumberArray[i] * 1;

            if (sum.length <= 1) {

                modifiedArray.push(sum);

            } else {

                let twoDigitsSumArray = Array.from(sum.toString()).map(Number);
                let finalSum = 0;

                for (let i = 0; i < twoDigitsSumArray.length; i++) {
                    finalSum += twoDigitsSumArray[i];
                }

                modifiedArray.push(finalSum);

            }

        }

    }

    // sum all array numbers
    let finalSumFinal1 = 0;
    for (let i = 0; i < modifiedArray.length; i++) {
        finalSumFinal1 += modifiedArray[i];

    }

    // Preperation befor ASCII
    finalSumFinal1 = (finalSumFinal1 % 26) + 65;

    //ACSII conversion
    let finalLetter = String.fromCharCode(finalSumFinal1);

    return finalLetter;
}