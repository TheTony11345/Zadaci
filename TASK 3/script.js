document.addEventListener("DOMContentLoaded", function () {
    const storedCountry = sessionStorage.getItem("country");

    if (storedCountry) {
        displayCountry(storedCountry);
    } else {
        fetchGeolocationData();
    }
});

function fetchGeolocationData() {
    const apiKey = "a2ad215596d3e46e3a3b869e389b2320";
    const apiUrl = `http://api.ipstack.com/check?access_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const countryName = data.country_name;
            sessionStorage.setItem("country", countryName);

            displayCountry(countryName);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function displayCountry(countryName) {
    const countryElement = document.getElementById("country");
    countryElement.textContent = countryName;
}
