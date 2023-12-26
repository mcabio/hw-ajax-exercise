import random

from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """Show index page."""
    
    return render_template("index.html")


# Flask (Server Side - Python):

# Flask receives the POST request at the /api/profile endpoint.
# The profile function in my_profile.py is called.

@app.route('/api/profile', methods=['POST'])
def profile():
    """Return results from profile form."""

# The function extracts the JSON data from the request body (name, age, occupation).
# In your current implementation, only the name, age, and occupation are processed.
    
    fullname = request.json['name']
    age = request.json['age']
    occupation = request.json['occupation']

    # The server-side code processes the received data (name, age, occupation).
    # Go to profile.js next
    return jsonify({'fullname': fullname, 'age': age, 'occupation': occupation})





if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
