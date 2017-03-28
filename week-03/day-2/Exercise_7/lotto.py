# Create a method that returns the five most frequent lottery number in a pretty table format
csv = open("lotto.csv", "r")
csv_list = csv.readlines()
numbers_table = []

for i1 in range(len(csv_list)):
    numbers_list = csv_list[i1].split(";")
    numbers_table.append(numbers_list[11:15])

count = 0
max_count = 0

for i2 in numbers_table:
    for j in range(1,91):
