from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
def draw_line(x,y):
    line = canvas.create_line(x,y,150,150)
    return line
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.


for i in range(0,301,20):
    draw_line(0,i)
    draw_line(i,0)
    draw_line(i,300)
    draw_line(300,i)




root.mainloop()
