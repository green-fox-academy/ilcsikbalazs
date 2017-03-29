from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
def draw_a_line(x,y):
    line = canvas.create_line(0,0,x,y)
    return line
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
draw_a_line(150,150)
# draw 3 lines with that function.
draw_a_line(300,50)
draw_a_line(50,300)
root.mainloop()
