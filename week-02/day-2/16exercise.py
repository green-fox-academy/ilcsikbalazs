# Write a program that asks for two integers
# The first represents the number of chickens the farmer has
# The seconf represents the number of pigs the farmer has
# It should print how many legs all the animals have

chickens = input("Input a integer:")
pigs = input("Input a integer:")
chickens = int(chickens)
pigs = int(pigs)
ch_legs = chickens * 2
print(ch_legs)
p_legs = pigs * 4
sum_legs = ch_legs + p_legs

print(sum_legs, "legs are there")
