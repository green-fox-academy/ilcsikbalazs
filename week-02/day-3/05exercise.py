# - Create a function called `factorio`
#   that returns it's input's factorial

def factorio(x):
    total = 1
    for i in range(1,x+1):
        total = total *i
    print(total)

factorio(4)
