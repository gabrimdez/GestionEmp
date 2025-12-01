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
    a = request.args.get("a", type=int)
    b = request.args.get("b", type=int)
    return f'La suma de {a} + {b} es {a + b}'

#arranca el servidor en el puerto por defecto (5000)
if(__name__ == "__main__"):
    app.run()