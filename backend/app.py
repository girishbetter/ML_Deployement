import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from model import predict_price

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Mobile Price Prediction API is running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    try:
        features = [
            data["battery_power"],
            data["ram"],
            data["int_memory"],
            data["mobile_wt"],
            data["clock_speed"]
        ]

        prediction = predict_price(features)

        labels = ["Low Cost", "Medium Cost", "High Cost", "Very High Cost"]

        return jsonify({
            "prediction": labels[prediction]
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)