document.getElementById("predictForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const resultBox = document.getElementById("result");
    resultBox.innerText = "Predicting...";

    const data = {
        battery_power: +document.getElementById("battery_power").value,
        ram: +document.getElementById("ram").value,
        int_memory: +document.getElementById("int_memory").value,
        mobile_wt: +document.getElementById("mobile_wt").value,
        clock_speed: +document.getElementById("clock_speed").value
    };

    try {
        const response = await fetch("https://ml-deployement-pmpa.onrender.com/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const result = await response.json();

        resultBox.innerText = "Predicted Category: " + result.prediction;

    } catch (error) {
        resultBox.innerText = "Server not responding (Render sleeping or error)";
    }
});