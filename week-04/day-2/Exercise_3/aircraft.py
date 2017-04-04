# Aircrafts

# Create a class that represents an aircraft
# There are 2 types of aircrafts: F16 and F35
# Both aircraft should track how many ammo it has
# All the aircrafts should be created with empty ammo store
# F16
# Max ammo: 8
# Base damage: 30
# F35
# Max ammo: 12
# Base damage: 50

# Methods:
# fight
# It should use all the ammos (set it to 0) and it should return the damage it took
# The damage is the multiplication of the base damage and the ammos
# get_type
# It should return it's type as a string
# get_status
# It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500

# Carrier
# Create a class that represents an aircraft-carrier
# The carrier should be able to store aircrafts
# Each carrier should have a store of ammo represented as number
# The inital ammo should be give by a parameter in it's constructor
# It should store a health point as a number
# Methods:
# add_aircraft
# It should take a string as the type of the aircraft (F16 / F35) and add a new aircraft to its store
# refill
# It should take a number as reference and substract as much ammo as possibe
# It can't have more ammo than the number or the max ammo
class Aircraft:
    def __init__(self,max_ammo,base_damage,current_ammo=0,type="Aircraft"):
        self.max_ammo = max_ammo
        self.base_damage = base_damage
        self.current_ammo = current_ammo
        self.type = type

    def get_type(self):
        return self.type

    def get_status(self):
        return ("Type: ",self.type,", Ammo: {}, Base Damage: {}, All Damage: {}".format(self.current_ammo, self.base_damage,
        self.base_damage * self.current_ammo))
        
    def fight(self):
        all_damage = self.base_damage * self.current_ammo
        self.current_ammo = 0
        return all_damage
        
    def refill(self):
        self.current_ammo = self.max_ammo        






class F16(Aircraft):
    def __init__(self,current_ammo=0,max_ammo=8,base_damage=30,type="F16"):
        super().__init__(max_ammo,base_damage,current_ammo,type)

    
class F35(Aircraft):
    def __init__(self,current_ammo=0,max_ammo=12,base_damage=50,type="F35"):
        super().__init__(max_ammo,base_damage,current_ammo,type)



class Carrier:
    def __init__(self,stored_ammo,health):
        self.stored_aircrafts = []
        self.stored_ammo = stored_ammo
        self.health = health

    def add_aircraft(self,flight):
        self.stored_aircrafts.append(flight)
        return self.stored_aircrafts
     
    def get_status(self):
        total_damage = 0
        for i in self.stored_aircrafts:
            total_damage += (i.base_damage * i.current_ammo)
        print("Aircraft count: {}, Ammo Storage: {}, Total damage: {}".format(len(self.stored_aircrafts), 
        self.stored_ammo, total_damage))
        for i in self.stored_aircrafts:
            print(i.get_status())

    def fill(self):
        needed_ammo = 0
        for i in self.stored_aircrafts:
            needed_ammo += i.max_ammo
            i.refill()
        self.stored_ammo -= needed_ammo   


# fill
# It should fill all the aircraft with ammo and substract the needed ammo from the ammo storage
# If there is not enough ammo than it should start to fill the F35 types first
# If there is no ammo when this method is called it should throw an exception




# get_status
# It should give back a string about it's and all of its aircrafts status like:
# Aircraft count: 4, Ammo Storage: 2300, Total damage: 2280
# Aircrafts:
# Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
# Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
# Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
# Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
# Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
    # def fill(self):
    #     for i in self.stored_aircrafts:
    #         i.refill()
    #         self.stored_ammo -= i.max_ammo
    #     if self.stored_ammo <= 0:
    #         print("Your aircraft doesn't have any ammo left!")    

    # def status(self):
    #     aircrafts_list = []
    #     for i in self.stored_aircrafts:
    #         aircrafts_list.append(i.get_type())
    #         i.get_status()
    #     print(self.stored_ammo,self.health,aircrafts_list)
    #     print(i.get_status())

aircraft = F16()
aircraft2 = F35()
carrier = Carrier(400,400)
carrier.add_aircraft(aircraft)
carrier.add_aircraft(aircraft)
carrier.add_aircraft(aircraft2)
carrier.add_aircraft(aircraft)
carrier.fill()
carrier.get_status()
# fight
# It should take another carrier as a refrence parameter and fire all the ammo from the aircrafts to it, than substract all the damage from it's health points