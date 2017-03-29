from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.
green_box = canvas.create_rectangle(120,140,180,260, fill = "green")
red_box = canvas.create_rectangle(0,0,150,100, fill = "red")
blue_box = canvas.create_rectangle(250,0,300,300, fill = "blue")
yellow_box = canvas.create_rectangle(0,50,20,300, fill = "yellow")

root.mainloop()
