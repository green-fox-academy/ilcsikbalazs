# The Garden
# is able to hold unlimited amount of flowers or trees
# when watering it should only water those what needs water with equally divided amount amongst them
# eg. watering with 40 and 4 of them need water then each gets watered with 10
# The Flower
# needs water if its current water amount is less then 5
# when watering it the flower can only absorb the 75% of the water
# eg. watering with 10 the flower's amount of water should only increase with 7.5
# The Tree
# needs water if its current water amount is less then 10
# when watering it the tree can only absorb the 40% of the water
# eg. watering with 10 the tree's amount of water should only increase with 4

# class Garden:
#     def __init__(sel):

class Flower:

    def __init__(self,name="",water_amount=10):
        self.name = name
        self.water_amount = water_amount
        if self.water_amount < 5:
            print("{} needs water".format(self.name))
        elif self.water_amount > 5:
            print("{} doesn't need water!".format(self.name))    

    def watering(self,add_water,flower):
        if self.water_amount < 5:
            self.water_amount += add_water*0.75
            print("{} has been watered.".format(self.name))
            if self.water_amount < 5:
                print("But {} still needs water!".format(self.name))
            elif self.water_amount >= 5:
                print("And doesn't need water.")
        elif self.water_amount > 5:
            print("{} doesn't need water!".format(self.name))

    def growing(self):
        self.water_amount -= 1
        print("{} is growing".format(self.name))
            

flower = Flower("Yellow")
flower.growing()
flower.growing()
flower.growing()
flower.watering(1,flower)
flower.growing()
flower.growing()
flower.growing()
flower.watering(10,flower)
    