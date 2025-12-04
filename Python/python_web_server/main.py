from flask import Flask, jsonify, render_template_string, request
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    resources={r"/api/*": {"origins": "http://localhost:5173"}},
    methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


@app.route("/")
def home():
    return "Hola usuario, bienvenido a mi servidor python con flask"


@app.route("/saluda")
def saluda():
    return "hola"

# /suma?a=6&b=8


@app.route("/api/suma", methods=["POST"])
def suma_api():
    data = request.get_json()
    num1 = data.get("num1", 0)
    num2 = data.get("num2", 0)
    resultado = num1 + num2
    dict = {"resultado": resultado}
    return jsonify(dict)


form_html = """
    <form action = "/login" method = "POST">
        <input name = "user"/>
        <input name = "pass"/>
        <button>Enviar</button>
    </form>
"""


@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template_string(form_html)
    elif request.method == 'POST':
        user = request.form.get("user")
        password = request.form.get("pass")
        # en la vida real, esto hay que comprobarlo con una BD
        if user == 'root' and password == 'Ad1234':
            return "Login correcto"
        else:
            return "user o password incorrecto", 401
    else:
        pass


# arranca el servidor en el puerto por defecto (5000)
if (__name__ == "__main__"):
    app.run()
