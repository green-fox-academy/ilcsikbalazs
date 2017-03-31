# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".
def separator(string):
    if string == "":
        return string
    else:
        return "*" + string[0] + separator(string[1:])


print(separator("valami"))
