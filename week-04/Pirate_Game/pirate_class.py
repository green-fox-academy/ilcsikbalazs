import random

class Pirate:
    # health damage block coin drink_rum fist dagger sword armour
    def __init__(self,health=100,damage=20,block=0,
    drink_rum=0,eat=0,coins=0,rum=0,food=0,armour=0,sword=False, died=False,passed_out=False,name=""):
        self.health = health
        self.damage = damage
        self.block = block
        self.drink_rum = drink_rum
        self.eat = eat
        self.coins = coins
        self.rum = rum
        self.food = food
        self.armour = armour
        self.sword = sword
        self.name = name
        self.died = died
        self.passed_out = passed_out

    def name_pirate(self,name):
        self.name = name

    def die(self):
        self.died=True
        print("Your pirate died")

    def pass_out(self):
        self.passed_out = True
        print("Your pirate passed out!")

    def get_weapon(self,input_answr):
        self.input = str(input_answr)
        if (self.input == "y") and (self.coins >= 20):
            self.coins -= 20
            self.sword = True
            damage_sword = random.randint(30,80)
            self.damage += damage_sword
        elif self.input == "n":
            print("You didn't buy a sword. ")
        elif self.coins < 20:
            print("You dont have enought money!")

    def fight(self,enemy):
        # multiplier = random.randint(1,5) / 10
        # luck = random.randint(0,1)
        # if luck == 1:
        #     self.damage += self.damage * multiplier
        #simulation:
        no_death = True
        while no_death == False:
            enemy.health = enemy.health - self.damage
            self.health = self.health - enemy.damage
            if (enemy.health <= 0):
                print("You won")
                no_death = False
            elif (self.health <= 0):
                self.die()
                no_death = False


    def get_coins(self,input_answr):
        if self.died == True:
            return self.die()
        if input_answr == "y":
            self.coins += 100
            print("You bought 100 coins")
        else:
            print("You cancelled")


    def get_status(self):
        print("Name: ",self.name,"    ","coins: ",self.coins,"\n",
        "Health:",self.health, " ","Damage:",self.damage, " ","Block:",self.block,"\n",
        "Rums: ",self.rum, "    ","Foods: ",self.food,"\n",
        "Armour",self.armour, "    ","Sword: ",self.sword,"\n")

new_pirate = Pirate()
enemy = Pirate()
# new_pirate.name_pirate(str(input("Name your pirate: ")))
# new_pirate.get_status()
# new_pirate.get_coins(str(input("Want to buy coins? y/n ")))
# new_pirate.get_status()
# #what do u wanna do condition
# new_pirate.get_weapon(str(input("Do you want to buy a sword for 20 coins? y/n ")))
new_pirate.get_status()
new_pirate.fight(enemy)
new_pirate.get_status()
