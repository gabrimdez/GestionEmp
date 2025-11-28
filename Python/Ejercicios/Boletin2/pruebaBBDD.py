import sqlite3
conn = sqlite3.connect('ejemplo.db')
cursor = conn.cursor()
cursor.execute("CREATE TABLE profesores (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(100))")
conn.commit()


conn.close()