# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

def divide_by_zero(x):
    if x == 0:
        print("Fail!")
    else:
        print(10/x)

divide_by_zero(int(input("Input a number: ")))
