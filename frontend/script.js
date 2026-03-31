document.getElementById("predictForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        battery_power: +document.getElementById("battery_power").value,
        ram: +document.getElementById("ram").value,
        int_memory: +document.getElementById("int_memory").value,
        mobile_wt: +document.getElementById("mobile_wt").value,
        clock_speed: +document.getElementById("clock_speed").value
    };

    try {
        const response = await fetch("https://your-app-name.onrender.com/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.error) {
            document.getElementById("result").innerText = "Error: " + result.error;
        } else {
            document.getElementById("result").innerText =
                "Predicted Category: " + result.prediction;
        }

    } catch (error) {
        document.getElementById("result").innerText =
            "Server not responding (probably sleeping on Render)";
    }
});