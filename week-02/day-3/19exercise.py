# - Create a variable named `aj`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Reverse the order of the elements in `aj`
# - Print the elements of the reversed `aj`

new_aj = []
aj = [3, 4, 5, 6, 7]
for i in range(4, -1, -1):
    new_aj.append(aj[i])

aj = new_aj
print(aj)
