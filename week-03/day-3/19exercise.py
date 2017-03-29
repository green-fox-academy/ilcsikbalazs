from tkinter import *
import random
from random import randint
root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw the night sky:
# - The background should be black
# - The stars should be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)

def stars(x,y,color):
    star = canvas.create_rectangle(x,y,x+5,y+5,fill = color)
    return star

background = canvas.create_rectangle(0,0,300,300, fill = "black")


for i in range(1,2000):
    colors = ["whitesmoke","silver","gray","darkgray"]
    rand1 = randint(1,300)
    rand2 = randint(1,300)
    rand3 = randint(0,3)
    stars(rand1,rand2,colors[rand3])

root.mainloop()
