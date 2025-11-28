class Persona:
    def __init__(self, nombre):
        self.nombre = nombre
    def __str__(self):
        return "Este es " + self.nombre
        
    manolo = Persona('Manolo')
    manolo.nombre = "Manuel"
    print(manolo)
    maria = Persona('Maria')
    manolo+maria
    manolo * maria