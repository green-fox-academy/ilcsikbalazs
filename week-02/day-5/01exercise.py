# "dog"	"god"	true
# "green"	"fox"	false
def anagram(input_1, input_2):
    string = ""
    if len(input_2) == len(input_1):
        for j in input_2:
           if j in input_1:
               string += j
    if string == input_2:
        print(True)

    else:
        print(False)

anagram(str(input("Input a word here: ")),str(input("Input another word here: ")))
