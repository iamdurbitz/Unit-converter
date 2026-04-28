const inputEl = document.getElementById("input-field")
const lengthEl = document.getElementById("length-result")
const volumeEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result")
const buttonEl = document.getElementById("convert-btn")


buttonEl.addEventListener("click", function(){
    let value = Number(inputEl.value)
    if (!value) {
        lengthEl.textContent = "Please enter a number."
        volumeEl.textContent = "Please enter a number."
        massEl.textContent = "Please enter a number."
  
    } else {
        let meterToFeet = value * 3.2808399
        let feetToMeter = value / 3.2808399
        let litersToGallons = value * 0.264172052
        let gallonsToLiters = value / 0.264172052
        let kilogramsToPounds = value * 2.20462262
        let poundsToKilograms = value / 2.20462262
        lengthEl.textContent = `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`
        volumeEl.textContent = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`
        massEl.textContent = `${value} kilos = ${kilogramsToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilograms.toFixed(3)} kilos`
        inputEl.value = ""
    }
})