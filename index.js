const allCharacters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"
const copyMsg = "Click on any of the passwords to copy it to your clipboard"

const passLengthSelector = document.getElementById("length-sel")
const copyLbl = document.getElementById("copy-lbl")
const passTxt1 = document.getElementById("pass1-txt")
const passTxt2 = document.getElementById("pass2-txt")
const passTxt3 = document.getElementById("pass3-txt")
const passTxt4 = document.getElementById("pass4-txt")

let txtBoxes = [passTxt1, passTxt2, passTxt3, passTxt4]

function generatePasswords() {
    const maxLength = Number(passLengthSelector.value)
    for(let j=0; j<4; j++) {
        let randomPassword = ''
        for(let i=0; i < maxLength; i++) {
            let randomIndex = Math.floor(Math.random() * allCharacters.length)
            randomPassword += allCharacters[randomIndex]
        }
        txtBoxes[j].style.backgroundImage = 'none'

        txtBoxes[j].value = randomPassword
    }
    copyLbl.textContent = copyMsg
}

function copyPassword(id) {
    copyLbl.textContent = ''
    const password = document.getElementById(id)
    password.select()
    document.execCommand('copy')
    copyLbl.textContent = 'Copied!'
}
