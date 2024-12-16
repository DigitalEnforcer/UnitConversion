/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userValue = document.getElementById("userInputValue")
const convertBtn = document.getElementById("convertBtn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
let metersValue = 0
let feetValue = 0
let literValue = 0
let gallonValue = 0
let kilogramValue = 0
let poundValue = 0 

convertBtn.addEventListener("click", function(){
    massValue(userValue.value)
    volumeValue(userValue.value)
    lengthValue(userValue.value)
})

function lengthValue(value){
    metersValue = value/(3.281)
    feetValue = value*(3.281)
    lengthResult.textContent = `${value} meters = ${feetValue.toFixed(3)} feet | ${value} feet = ${metersValue.toFixed(3)} meters`
}

function volumeValue(value){
    literValue = value/(0.264)
    gallonValue = value*(0.264)
    volumeResult.textContent = `${value} liters = ${gallonValue.toFixed(3)} gallons | ${value} gallons = ${literValue.toFixed(3)} liters`
}

function massValue(value){
    kilogramValue = value/(2.204)
    poundValue = value*(2.204)
    massResult.textContent = `${value} kilos = ${poundValue.toFixed(3)} pounds | ${value} pounds = ${kilogramValue.toFixed(3)} kilos`
}