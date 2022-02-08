const allCharacters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"

const passButton1 = document.getElementById("pass1-btn")
const passButton2 = document.getElementById("pass2-btn")
const passButton3 = document.getElementById("pass3-btn")
const passButton4 = document.getElementById("pass4-btn")

let buttons = [passButton1, passButton2, passButton3, passButton4]


function generatePasswords(maxLength = 16) {
    for(let btnIndex=0; btnIndex<4; btnIndex++) {
        let randomPassword = ''
        for(let i=0; i < maxLength; i++) {
            let randomIndex = Math.floor(Math.random() * allCharacters.length)
            randomPassword += allCharacters[randomIndex]
        }
        buttons[btnIndex].style.backgroundImage = 'none'

        buttons[btnIndex].textContent = randomPassword
    }
}

function copyPassword(buttonNumber) {

}