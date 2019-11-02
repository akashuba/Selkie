const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const sumbols = '!@#$%^&*?';
const lettersArr = letters.split('');
const numbersArr = numbers.split('');
const sumbolsArr = sumbols.split('');

class PasswordGenerator {
    randomNum(n) {
        return Math.round(Math.random() * n);
    }

    getPassword(passLength) {
        let lettersPart = '';
        for (let i = 0; i < passLength - 4; i++) {
            lettersPart += lettersArr[this.randomNum(lettersArr.length - 1)];
        }
        return (
            lettersArr[this.randomNum(lettersArr.length - 1)].toUpperCase() +
            lettersPart +
            sumbolsArr[this.randomNum(sumbolsArr.length - 1)] +
            numbersArr[this.randomNum(sumbolsArr.length - 1)] +
            numbersArr[this.randomNum(sumbolsArr.length - 1)]
        );
    }
}

const passwordGenerator = new PasswordGenerator();

exports.passwordGenerator = passwordGenerator;
