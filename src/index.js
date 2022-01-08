module.exports = function toReadable (number) {
    let numberStr = String (number);
    let hundreds = '';
    let tens = '';
    let units = '';
    let a; let b; let c; 
    if (numberStr.length === 3) {
        a = 0; b = 1; c = 2; 
    }
    else if (numberStr.length === 2){
        a = ''; b = 0; c = 1; 
    }
    else if (numberStr.length === 1){
        a = ''; b = ''; c = 0; 
    }
    if (c === 0 && numberStr[c] === '0') {
        units = 'zero';
    }
    switch (numberStr[a]) {
        case '0': hundreds = ''; break;
        case '1': hundreds = 'one hundred'; break;
        case '2': hundreds = 'two hundred';break;
        case '3': hundreds = 'three hundred'; break;
        case '4': hundreds = 'four hundred'; break;
        case '5': hundreds = 'five hundred'; break;
        case '6': hundreds = 'six hundred'; break;
        case '7': hundreds = 'seven hundred'; break;
        case '8': hundreds = 'eight hundred'; break;
        case '9': hundreds = 'nine hundred'; break;
    }
    switch (numberStr[b]) {
        case '0': tens = ''; break;
        case '1':
            switch (numberStr[c]) {
                case '0': tens = ' ten'; break;
                case '1': tens = ' eleven'; break;
                case '2': tens = ' twelve'; break;
                case '3': tens = ' thirteen'; break;
                case '4': tens = ' fourteen'; break;
                case '5': tens = ' fifteen'; break;
                case '6': tens = ' sixteen'; break;
                case '7': tens = ' seventeen'; break;
                case '8': tens = ' eighteen'; break;
                case '9': tens = ' nineteen'; break;
            }            
            break;
        case '2': tens = ' twenty'; break;
        case '3': tens = ' thirty'; break;
        case '4': tens = ' forty'; break;
        case '5': tens = ' fifty'; break;
        case '6': tens = ' sixty'; break;
        case '7': tens = ' seventy'; break;
        case '8': tens = ' eighty'; break;
        case '9': tens = ' ninety'; break;
    }
    if (numberStr[b] === '1') {
        units = '';
    }
    else {
        switch (numberStr[c]) {
            case '1': units = ' one'; break;
            case '2': units = ' two'; break;
            case '3': units = ' three'; break;
            case '4': units = ' four'; break;
            case '5': units = ' five'; break;
            case '6': units = ' six'; break;
            case '7': units = ' seven'; break;
            case '8': units = ' eight'; break;
            case '9': units = ' nine'; break;
        }
    }
    let result = hundreds + tens + units;
  return result.trim();
}
