const input = document.getElementById("input");

function checkPalindrome() {
    const value = input.value;
    const reversedValue = value.split("").reverse().join("");
    if (value === reversedValue) {
        alert("It is a Palindrome");
    } else {
        alert("It is not a Palindrome");
    }
    
}
