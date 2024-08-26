function Chuoidoixung(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}


console.log(Chuoidoixung("madam"));
