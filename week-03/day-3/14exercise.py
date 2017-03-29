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
draw_line(0,0)
draw_line(0,150)  #20pixels
draw_line(0,300)

numbers = []
for num in range(0,301,20):
    numbers.append(num)


for i in numbers:
    for j in numbers:
        draw_line(i,j)

root.mainloop()
