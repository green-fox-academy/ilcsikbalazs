# Write a program that reads a number form the standard input,
# Than prints "Odd" if the number is odd, or "Even" it it is even.


szam = input()
szam = int(szam)
m = szam%2
if (m == 0):
    print("Even")
else:
    print("Odd")
