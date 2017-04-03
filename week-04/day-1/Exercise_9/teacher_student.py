# Teacher
# teach(student) -> calls the students learn method
# answer()

class Teacher:
    def teach(self,Student):
        Student.learn()
    def answer(self):
        print("Answering...")

# Student
# learn()
# question(teacher) -> calls the teachers answer method

class Student:
    def learn(self):
        print("Learning...")
    def question(self,Teacher):
        Teacher.answer()

student1 = Student()
teacher1 = Teacher()

student1.question(teacher1)
teacher1.teach(student1)
