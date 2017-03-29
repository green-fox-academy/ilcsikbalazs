from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
def draw_square(x,y):
    square = canvas.create_rectangle(0,0,x,y)
    return square
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
draw_square(50,50)
# draw 3 squares with that function.
draw_square(100,100)
draw_square(200,200)

root.mainloop()
