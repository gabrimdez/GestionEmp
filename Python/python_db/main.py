from connect import get_connection


def show_table():
    conn = get_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM profesores;")
        profesores = cursor.fetchall()
        if not profesores:
            print("No hay profesores en la BBDD.")
        for profe in profesores:
            print(profe)
        print("--------------------------- Total: " + str(len(profesores)))
    finally:
        conn.close()


def add_professor():
    conn = get_connection()
    try:
        cursor = conn.cursor()
        name = input("Ingrese el nombre del nuevo profesor: ")
        cursor.execute("INSERT INTO profesores (name) VALUES (%s)", (name,))
        conn.commit()
        print("Profesor agregado correctamente.")
    finally:
        conn.close()


def menu():
    print(" === MENU ===")
    print("1. Mostrar la lista de profes")
    print("2. Agregar un nuevo profe")
    print("3. Salir")

    option = input("Seleccione una opción: ")
    if option == "1":
        show_table()
    elif option == "2":
        add_professor()
    elif option == "3":
        exit()
    else:
        print("Opción inválida")


if __name__ == "__main__":
    while True:
        menu()
