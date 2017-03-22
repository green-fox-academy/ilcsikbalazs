number = int(input("Give me a number: "))

if (number%2 == 0):
    number += 1
number += 1
for i in range(1, number, 2):
    print(int((number - i)/2)*" ", i * "*")
for i in range(1, number, 2):
    print(int((i)/2 + 1)*" ", int((number - i) - 2) * "*",)
