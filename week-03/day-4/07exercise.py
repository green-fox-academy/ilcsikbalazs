# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def changer(string):

    if string == "":
        return string
    elif string[0] == "x":
        return "y"+changer(string[1:])
    else:
        return string[0] + changer(string[1:])

print(changer("xxy"))
