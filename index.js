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
