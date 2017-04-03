import math
from tkinter import *

root = Tk()

canvas = Canvas(root, width="600",  height='600')
canvas.pack()

# def create_line(x,y,x1,y1):
#     line = canvas.create_line(x,y,x1,y1)
#
# def recursive(x,y,x1,y1):
#     create_line(x,y,x1,y1)
#     if x1>5 and y1>5:
#         recursive(x1,y1,x1*4/5,y1/2)
#
# recursive(300,400,300,300)

def create_line(x,y,size):
    line = canvas.create_line(x,y,x+size,y+size)

def recursive():
    create_line


root.mainloop()
