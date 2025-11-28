#Crea una función que acepte 2 parámetros, y devuelva el mayor de ellos elevando al cubo

#Este está mal
def miFuncion(a,b):
    if(a>=b):
        return a**3
    else: return b**3

#Este está bien 
def miFuncion2(a,b):
    return a**3 if a>=b else b**3