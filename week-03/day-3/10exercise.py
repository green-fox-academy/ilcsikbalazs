from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
def draw_square(size,color):
    square = canvas.create_rectangle(150-size/2,150-size/2,150+size/2,150+size/2,fill = color)
    return square
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
draw_square(150,"red")
# create a loop that fills the canvas with rainbow colored squares.
colors = ["red","orange","yellow","green","deepskyblue","darkblue","magenta"]
size = 300

for i in range(len(colors)):
    draw_square(size-(i*40),colors[i])



root.mainloop()
