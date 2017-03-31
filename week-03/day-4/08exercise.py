# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def remover(string):
    if string == "":
        return string
    elif string[0] == "x":
        return "" + remover(string[1:])
    else:
        return string[0] + remover(string[1:])


print(remover("xxvalxami"))
