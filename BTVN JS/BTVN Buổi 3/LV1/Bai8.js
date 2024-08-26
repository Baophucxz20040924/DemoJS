function Thaythe(str, subStr, newSubStr) {
    return str.replace(subStr, newSubStr);
}


console.log(Thaythe("Hello, world!", "world", "universe")); // "Hello, universe!"
