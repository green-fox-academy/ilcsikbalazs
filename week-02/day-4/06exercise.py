# Things are a little bit messed up
# Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
# Assemble the fragments into the out variable

out = "";
notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11]

hashmap = [
    {7: "run around and desert you"},
    {50: "tell a lie and hurt you"},
    {49: "make you cry,"},
    {2: "let you down"},
    {12: "give you up,"},
    {1: "Never gonna"},
    {11: "\n"},
    {3: "say goodbye"}
]

#these are the only valid hashmaps
# hashmap[0][7]
# hashmap[1][50]
# hashmap[2][49]
# hashmap[3][2]
# hashmap[4][12]
# hashmap[5][1]
# hashmap[6][11]
# hashmap[7][3]
dict.has_key(key)

for x in hashmap:
    if x.has_key(1) == True:
        print(x)

print(out)
