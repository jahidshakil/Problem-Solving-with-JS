// write a function that takes a string as an argument and returns the index of first non reapeating charecter  present in  the string

const string = "jjlaahhiidddeeeefgghii";

const nonRepeatingCharecter = (str) => {
    const object = {};

    for (let item of str) {
        object[item] = object[item] + 1 || 1;
    }
    console.log(object);
    for (let item in object) {
        if (object[item] == 1) {
            return str.indexOf(item);
        }

    }
    

}


console.log(nonRepeatingCharecter(string))