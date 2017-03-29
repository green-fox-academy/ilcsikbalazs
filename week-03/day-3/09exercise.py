from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
def draw_square(x):
    square = canvas.create_rectangle(2,2,x,x)
    return square
# the square size
# and draws a square of that size to the center of the canvas.
draw_square(150)
# draw 3 squares with that function.
draw_square(75)
draw_square(300)


root.mainloop()
