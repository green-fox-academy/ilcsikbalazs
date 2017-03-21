Python 3.6.0 (v3.6.0:41df79263a11, Dec 23 2016, 07:18:10) [MSC v.1900 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> a = 5
>>> b = 7
>>> c = 10
>>> surfaceAreaA = a * b
>>> surfaceAreaB = a * c
>>> surfaceAreaC = b * c
>>> volume = a * b * c
>>> print(surfaceArea, surfaceAreaB, surfaceAreaC, volume)
Traceback (most recent call last):
  File "<pyshell#7>", line 1, in <module>
    print(surfaceArea, surfaceAreaB, surfaceAreaC, volume)
NameError: name 'surfaceArea' is not defined
>>> print(surfaceAreaA, surfaceAreaB, surfaceAreaC, volume)
35 50 70 350
>>> 
