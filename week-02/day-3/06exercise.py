# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)

def printer(*args):
    for x in args:
        print(x)
printer("valami", 1, 2 ,3)
