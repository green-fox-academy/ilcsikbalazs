# Create Station and Car classes
    # Station
        # gas_amount
        # refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gas_amount
    # Car
        # gas_amount
        # capacity
        # create constructor for Car where:
        # initialize gas_amount -> 0
        # initialize capacity -> 100

class Station:
    def __init__(self, gas_amount=1000):
        self.gas_amount = gas_amount

    def refill(self,car):
        self.gas_amount -= car.capacity
        car.gas_amount += car.capacity

    def get_gas_amount(self):
        print(self.gas_amount)


class Car:
    def __init__(self,gas_amount=0,capacity=100):
        self.gas_amount = gas_amount
        self.capacity = capacity

    def get_gas_amount(self):
        print(self.gas_amount)

car1 = Car()
car2 = Car()
car3 = Car()
station1 = Station()
station1.refill(car1)
station1.refill(car2)
station1.refill(car3)

station1.get_gas_amount()
car1.get_gas_amount()
car2.get_gas_amount()
car3.get_gas_amount()
