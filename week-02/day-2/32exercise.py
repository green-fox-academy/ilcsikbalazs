# Crate a program that draws a chess table like this
#
# % % % %
#  % % % %
# % % % %
#  % % % %
# % % % %
#  % % % %
# % % % %
#  % % % %
#

number = int(input("Give me a number: "))

for i in range(1, (number*2+1)):
    if i%2 == 0:
        print(" ", number * "%")
    else:
        print(number * "%")
