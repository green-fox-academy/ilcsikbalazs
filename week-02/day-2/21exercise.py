# Write a program that asks for two numbers
# Thw first number represents the number of girls that comes to a party, the
# second the boys
# It should print: The party is exellent!
# If the the number of girls and boys are equal and there are more people coming than 20
#
# It should print: Quite cool party!
# It there are more than 20 people coming but the girl - boy ratio is not 1-1
#
# It should print: Average party...
# If there are less people coming than 20
#
# It should print: Sausage party
# If no girls are coming, regardless the count of the people

gilr_comesToParty = input("How many girls come? ")
boy_comesToParty = input("How many boys come? ")
gilr_comesToParty = int(gilr_comesToParty)
boy_comesToParty = int(boy_comesToParty)
numberOfPeople = gilr_comesToParty + boy_comesToParty

if(gilr_comesToParty == boy_comesToParty and numberOfPeople > 20):
    print("The party is exellent!")

elif(numberOfPeople > 20):
    print("Quite cool party!")

elif(numberOfPeople <= 20):
    print("Average party...")

elif(gilr_comesToParty == 0):
    print("Sausage party")
