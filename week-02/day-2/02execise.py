Python 3.6.0 (v3.6.0:41df79263a11, Dec 23 2016, 07:18:10) [MSC v.1900 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> 
x = "Hello, "
>>> print(x + "Dóri")
Hello, Dóri
>>> print(x + Bajusz)
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    print(x + Bajusz)
NameError: name 'Bajusz' is not defined
>>> print(x + "Bajusz")
Hello, Bajusz
>>> print(x + "Pati")
Hello, Pati
>>> 
