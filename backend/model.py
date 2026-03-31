import pickle
import numpy as np
import os

# Get current directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Correct path for Render
model_path = os.path.join(BASE_DIR, "model.pkl")

# Load model
model = pickle.load(open(model_path, "rb"))

def predict_price(features):
    features = np.array(features).reshape(1, -1)
    prediction = model.predict(features)
    return int(prediction[0])