# Create a method that returns the five most frequent lottery number in a pretty table format
csv = open("lotto.csv", "r")
csv_list = csv.readlines()
numbers_table = []
for i in csv_list:
    numbers_list = i.split(";")
    numbers_table.append(numbers_list[11:16])
all_in_list = []
for i2 in range(len(numbers_table)):
    for j2 in range(0,5):
        allnum = numbers_table[i2][j2]
        allnum = int(allnum)
        # print(allnum)
        all_in_list.append(allnum)
# print(all_in_list)
keys = []
values = []
for i3 in range(1,90):
    variable_turns = all_in_list.count(i3)
    values.append(variable_turns)
    keys.append(i3)
# print(keys, values)
dictionary = dict(zip(keys, values))
# print(dictionary)
max_number = 0
max_number_key = 0
for k,v in dictionary.items():
    if v > max_number:
        max_number = v
        max_number_key = k
print(max_number_key, max_number)
