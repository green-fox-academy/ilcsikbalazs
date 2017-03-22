#Write a program that asks for a number.
#It would ask this many times to enter an integer,
#if all the integers are entered, it should print the sum and average of these
#integers like:
#
#Sum: 22, Average: 4.4

number = int(input("Give me a number: "))

total = 0
for i in range(1, number+1):
    integer = int(input("Give me the " + str(i) + "-st integer: "))
    total += integer
print("Sum: " + str(total))
print("Average: " + str(total/number))
