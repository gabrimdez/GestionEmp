from urllib import request
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hola usuario, bienvenido a mi servidor python con flask"

@app.route("/saluda")
def saluda():
    return "hola"

#/suma?a=6&b=8
@app.route("/suma")
def suma():
    a = request.args.get('a', type=int, default=0)
    b = request.args.get('b', type=int, default=0)
    resultado = a + b
    return f'La suma de {a} + {b} es {resultado}'

@app.route("/login")
def login():
    user = request.form.get("user")
    password = request.form.get("pass")
    if user == 'root' and password == 'Ad1234':
        return "Login correcto"
    else:
        return "user o password incorrecto"

#arranca el servidor en el puerto por defecto (5000)
if(__name__ == "__main__"):
    app.run()