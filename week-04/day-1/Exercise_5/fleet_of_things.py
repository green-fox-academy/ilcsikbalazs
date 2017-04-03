# You have the Thing class
# You have the Fleet class
# You have the fleet_of_things.py file
# Download those, use those
# In the fleet_of_things file create a fleet
# Achieve this output:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch

from fleet import Fleet
from thing import Thing

fleet = Fleet()

number_1 = Thing("Get milk")
# number_1.complete()
fleet.add(number_1)

number_2 = Thing("Remove the obstacles")
# number_2.complete()
fleet.add(number_2)

number_3 = Thing("Stand up")
number_3.complete()
fleet.add(number_3)

number_4 = Thing("Eat lunch")
number_4.complete()
fleet.add(number_4)

print(fleet)
