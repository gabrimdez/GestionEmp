#Crea un programa (en Python) que pida constantemente por pantalla que le introduzcan números.
#Cuando el usuario introduzca el valor -1,el programa mostrará la suma de todos los números insertados y finalizará.

while True:
    num = int(input("Introduce un número (-1 para finalizar): "))
    if num == -1:
        break
    total += num
print("La suma de todos los números introducidos es:", total)

