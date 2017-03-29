from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.
box = canvas.create_rectangle(50,50,250,250, fill = "yellow")
green_line = canvas.create_line(50,50,250,50, fill = "green")
red_line = canvas.create_line(50,50,50,250, fill = "red")
blue_line = canvas.create_line(250,50,250,250, fill = "blue")


root.mainloop()
