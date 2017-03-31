from tkinter import *

root = Tk()

canvas = Canvas(root, width="600",  height='600')
canvas.pack()

def create_triangle(x,y,size):
  triangle = canvas.create_polygon(x,y,x+size,y,x+size/2,y+size, fill = "white", outline = "black")

def recusrsive(x,y,size):
    create_triangle(x,y,size)
    if size > 5:
        recusrsive(x,y,size/2)
        recusrsive(x+size*1/2,y,size/2)
        recusrsive(x+size*1/4,y+size*1/2,size/2)

recusrsive(0,0,600)

root.mainloop()
