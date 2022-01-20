module.exports = function toReadable (number) {
    let result='';
    let special = false;
    let a= number%10;
    if (number===0) {return 'zero';}
    if (number%100===10) {result+='ten'; special=true;}
    if (number%100===11) {result+='eleven'; special=true;} 
    if (number%100===12) {result+='twelve';special=true;}
    if (number%100===13) {result+='thirteen';special=true;}
    if (number%100===14) {result+='fourteen';special=true;}
    if (number%100===15) {result+='fifteen';special=true;}
    if (number%100===16) {result+='sixteen';special=true;}
    if (number%100===17) {result+='seventeen';special=true;}
    if (number%100===18) {result+='eighteen';special=true;}
    if (number%100===19) {result+='nineteen';special=true;}
    
    
    if (special===false) {switch (a) {
        case 1:
          result+= 'one';
          break;
        case 2:
            result+= 'two';
            break;
        case 3:
          result+= 'three';
          break;
        case 4:
            result+= 'four';
            break;
        case 5:
            result+= 'five';
            break;
        case 6:
            result+= 'six';
            break;
        case 7:
            result+= 'seven';
            break;
        case 8:
            result+= 'eight';
            break;
        case 9:
            result+= 'nine';
            break;
        case 0:
            break;
    }}
    a= Math.floor(number/10)%10;
    if ((special===false)&&((number%10)!=0)) {
    switch (a) {
        case 2:
            result= 'twenty '+result;
            break;
        case 3:
          result=  'thirty '+result;
          break;
        case 4:
            result=  'forty '+result;
            break;
        case 5:
            result=  'fifty '+result;
            break;
        case 6:
            result=  'sixty '+result;
            break;
        case 7:
            result=  'seventy '+result;
            break;
        case 8:
            result=  'eighty '+result;
            break;
        case 9:
            result=  'ninety '+result;
            break;
        case 0:
            break;
    }}

    if ((special===false)&&((number%10)===0)) {
        switch (a) {
            case 2:
                result= 'twenty' +result;
                break;
            case 3:
              result=  'thirty'+result;
              break;
            case 4:
                result=  'forty'+result;
                break;
            case 5:
                result=  'fifty'+result;
                break;
            case 6:
                result=  'sixty'+result;
                break;
            case 7:
                result=  'seventy'+result;
                break;
            case 8:
                result=  'eighty'+result;
                break;
            case 9:
                result=  'ninety'+result;
                break;
            case 0:
                break;
        }}

    
    a= Math.floor(number/100)%10;
    if ((number%100)===0) {
        switch (a) {
            case 1:
              result= 'one hundred'+result;
              break;
            case 2:
                result='two hundred'+result;
                break;
            case 3:
              result='three hundred'+result;
              break;
            case 4:
                result= 'four hundred'+result;
                break;
            case 5:
                result='five hundred'+result;
                break;
            case 6:
                result= 'six hundred'+result;
                break;
            case 7:
                result='seven hundred'+result;
                break;
            case 8:
                result='eight hundred'+result;
                break;
            case 9:
                result='nine hundred'+result;
                break;
            case 0:
                break;

    }}
    if ((number%100)!=0) {
    switch (a) {
        case 1:
          result= 'one hundred '+result;
          break;
        case 2:
            result='two hundred '+result;
            break;
        case 3:
          result='three hundred '+result;
          break;
        case 4:
            result= 'four hundred '+result;
            break;
        case 5:
            result='five hundred '+result;
            break;
        case 6:
            result= 'six hundred '+result;
            break;
        case 7:
            result='seven hundred '+result;
            break;
        case 8:
            result='eight hundred '+result;
            break;
        case 9:
            result='nine hundred '+result;
            break;
        case 0:
            break;
    }}
  return result;
}
