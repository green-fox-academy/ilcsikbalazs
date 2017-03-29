from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
def draw_square(x,color):
    square = canvas.create_rectangle(2,2,x,x,fill = color)
    return square
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
draw_square(150,"red")
# create a loop that fills the canvas with rainbow colored squares.
for i in range(300,0,-10):
    if i%20 == 0:
        draw_square(i,"purple")
    elif i%30 == 0:
        draw_square(i,"blue")
    else:
        draw_square(i,"lime")

root.mainloop()
