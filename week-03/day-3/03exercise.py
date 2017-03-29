from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw the canvas' diagonals in green.
line_one = canvas.create_line(0,0,300,300)
line_two = canvas.create_line(0,300,300,0)


root.mainloop()
