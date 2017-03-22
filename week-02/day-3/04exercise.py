# - Write a function called `sum` that sum all the numbers
#   until the given parameter


def summ(*args):
    sum_numbers = 0
    for arg in args:
        sum_numbers += arg
    print(sum_numbers)

summ(1,2,3,6,7)
