class Person:
    def __init__(self,name="Jane Doe",age=30,gender="female"):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print("Hi, I'm {}, a age year old gender.".format(self.name))

    def get_goal(self):
        print("My goal is: Live for the moment!")

class Student(Person):
    def __init__(self,name="Jane Doe",age=30,gender="female",previous_organization="The school of life",skipped_days=0):
        Person.__init__(self,name,age,gender)
        self.previous_organization = previous_organization
        self.skipped_days = skipped_days

    def get_goal(self):
        print("Be a junior software developer.")

    def introduce(self):
        print("Hi, I'm {}, a {} year old {} from {} who skipped {} days from the course already.".format(self.name, self.age, self.gender, self.previous_organization,self.skipped_days))

    def skip_days(self,number_of_days):
        self.skipped_days += number_of_days

class Mentor(Person):
    def __init__(self,name="Jane Doe",age=30,gender="female",level="intermediate"):
        Person.__init__(self,name,age,gender)
        self.level = level

    def get_goal(self):
            print("Educate brilliant junior software developers.")

    def introduce(self):
        print("Hi, I'm {}, a {} year old {}, {} mentor.".format(self.name,self.age,self.gender,self.level))

class Sponsor(Person):

    def __init__(self,name="Jane Doe",age=30,gender="female",company="Google",hired_students=0):
        Person.__init__(self,name,age,gender)
        self.company = company
        self.hired_students = hired_students

    def get_goal(self):
        print("Hire brilliant junior software developers.")

    def introduce(self):
        print("Hi, I'm {}, a {} year old {} who represents {} and hired {} students so far.".format(self.name,self.age,self.gender,self.company,self.hired_students))

    def hire(self):
        self.hired_students += 1

class LagopusClass:
    def __init__(self,class_name,students=0,mentors=0):
        self.class_name = class_name
        self.students = []
        self.mentors = []

    def add_student(self,student):
        self.students.append(student)

    def add_mentor(self,mentor):
        self.mentors.append(mentor)

    def info(self):
        print("Lagopus {} class has {} students and {} mentors.".format(self.class_name,len(self.students),len(self.mentors)))

# person = Person("Jane Doe",30,"female")
# person.introduce()
# student = Student("Jane Doe",30,"female","The School of Life",0)
# student.introduce()
# mentor = Mentor("Jane Doe",30,"female","intermediate")
# mentor.introduce()
# sponsor = Sponsor("Jane Doe", 30, "female", "Google", 0)
# sponsor.introduce()
# lagoclass.add_mentors(mentor)
# lagoclass.add_student(student)
# lagoclass.info()

people = []

mark = Person('Mark', 46, 'male')
people.append(mark)
jane = Person()
people.append(jane)
john = Student('John Doe', 20, 'male', 'BME')
people.append(john)
student = Student()
people.append(student)
gandhi = Mentor('Gandhi', 148, 'male', 'senior')
people.append(gandhi)
mentor = Mentor()
people.append(mentor)
sponsor = Sponsor()
elon = Sponsor('Elon Musk', 46, 'male', 'SpaceX')
student.skip_days(3)

for i in range(5):
    elon.hire()

for i in range(3):
    sponsor.hire()

for member in people:
    member.introduce()
    member.get_goal()

badass = LagopusClass('BADA55')
badass.add_student(student);
badass.add_student(john);
badass.add_mentor(mentor);
badass.add_mentor(gandhi);
badass.info();
