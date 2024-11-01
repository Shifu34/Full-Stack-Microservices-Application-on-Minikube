# backend/app/app.py

from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'supersecretkey'
jwt = JWTManager(app)

# In-memory user database
users_db = {}

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if email in users_db:
        return jsonify({"msg": "User already exists"}), 400
    
    hashed_password = generate_password_hash(password)
    users_db[email] = {"email": email, "password": hashed_password}
    return jsonify({"msg": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = users_db.get(email)
    if not user or not check_password_hash(user['password'], password):
        return jsonify({"msg": "Invalid email or password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
