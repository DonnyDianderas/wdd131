document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Calculate wind chill using static values 
const temperature = 25; // in Celsius
const windSpeed = 15; // in km/h

// Formula in Celsius and km/h==> Twindchill = 13.12 + 0.6215 × T(air) − 11.37 × (V ^0.16) + 0.3965 x T(air) × (V ^0.16)

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)); 
}

// Function to check if the requirements are met
function displayWindChill(temp, speed) {
    const windChillElement = document.getElementById("windchill");
    if (temp <= 10 && speed > 4.8) {
        const windChill = calculateWindChill(temp, speed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = "N/A"; 
    }
}
