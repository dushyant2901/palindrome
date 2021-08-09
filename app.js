const userInput = document.querySelector("#user-input")
const checkBtn = document.querySelector("#check-Btn")
const output = document.querySelector("#output")


checkBtn.addEventListener("click", () => {
    let userInputText = userInput.value
    checkPalindrome(userInputText)
})



function checkPalindrome(txt) {
    let newTxt=txt.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let txtLength = Math.floor(newTxt.length)
    let newTxtLength = Math.floor(txtLength / 2)
console.log(txt,newTxt)
    for (let i = 0; i < newTxtLength; i++) {
        if (newTxt[i] !== newTxt[txtLength - 1 - i]) {
            output.innerText = "Nope! Given word is not palindrome"
          
            return
        }
        else { (output.innerText = "yes it is a palindrome") }
    }
}

