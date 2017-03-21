Python 3.6.0 (v3.6.0:41df79263a11, Dec 23 2016, 07:18:10) [MSC v.1900 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> name = str("Balázs")
>>> age = int(20)
>>> married = False
>>> heigth = float(1,89)
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    heigth = float(1,89)
TypeError: float() takes at most 1 argument (2 given)
>>> heigth = float(1.89)
>>> print(name, age, heigth, married)
Balázs 20 1.89 False
>>> 
