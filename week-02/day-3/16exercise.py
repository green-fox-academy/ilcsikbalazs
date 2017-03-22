# - Create a variable named `nimals`
#   with the following content: `["kuty", "macs", "cic"]`
# - Add all elements an `"a"` at the end
animals = []
nimals = ["kuty", "macsk", "cic"]
for i in nimals:
    i += "a"
    j = [i]
    animals += j
print(animals)
