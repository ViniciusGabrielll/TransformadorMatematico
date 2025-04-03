function binaryToDecimal(binaryString) {
    if (!/^[01]+$/.test(binaryString)) {
        return "";
    }
    return parseInt(binaryString, 2);
}

function decimalToBinary(decimalNumber) {
    if (!/^\d+$/.test(decimalNumber)) {
        return "";
    }
    return (parseInt(decimalNumber, 10) >>> 0).toString(2);
}

function textToBinary(text) {
    return text.split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
}

function binaryToText(binaryString) {
    return binaryString.split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');
}

document.addEventListener("DOMContentLoaded", function() {
    const binaryInput = document.getElementById("binaryInput");
    const decimalInput = document.getElementById("decimalInput");
    const textInput = document.getElementById("textInput");
    const binaryTextInput = document.getElementById("binaryTextInput");
    
    binaryInput.addEventListener("input", function() {
        decimalInput.value = binaryToDecimal(binaryInput.value);
    });
    
    decimalInput.addEventListener("input", function() {
        binaryInput.value = decimalToBinary(decimalInput.value);
    });
    
    textInput.addEventListener("input", function() {
        binaryTextInput.value = textToBinary(textInput.value);
    });
    
    binaryTextInput.addEventListener("input", function() {
        textInput.value = binaryToText(binaryTextInput.value);
    });
});

const conversionTable = {
    "b": 1,        // 1 Bit
    "B": 8,        // 1 Byte = 8 Bits
    "KB": 8000,    // 1 KB = 1000 Bytes * 8
    "MB": 8000000, // 1 MB = 1000 KB * 8
    "GB": 8000000000, // 1 GB = 1000 MB * 8
    "TB": 8000000000000 // 1 TB = 1000 GB * 8
};

function convert() {
    let inputValue = parseFloat(document.getElementById("inputValue").value) || 0;
    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;
    
    let resultInBits = inputValue * conversionTable[inputUnit];
    let result = resultInBits / conversionTable[outputUnit];
    
    document.getElementById("outputValue").value = result;
}

function reverseConvert() {
    let outputValue = parseFloat(document.getElementById("outputValue").value) || 0;
    let outputUnit = document.getElementById("outputUnit").value;
    let inputUnit = document.getElementById("inputUnit").value;
    
    let resultInBits = outputValue * conversionTable[outputUnit];
    let result = resultInBits / conversionTable[inputUnit];
    
    document.getElementById("inputValue").value = result;
}