from tkinter import *

root = Tk()

canvas = Canvas(root, width="600",  height='600')
canvas.pack()

def create_hexagon(x,y,size):
    hexagon = canvas.create_polygon(x,y+size/2, x+size/4,y, x+size*3/4,y, x+size,y+size/2, x+size*3/4,y+size, x+size/4,y+size, fill="white", outline="black")

def recursive(x,y,size):
    create_hexagon(x,y,size)
    if size>5:
        recursive(x+size/6,y,size/3)
        recursive(x+size/6,y+size*2/3,size/3)
        recursive(x,y+size*1/3,size/3)
        recursive(x+size*1/2,y,size/3)
        recursive(x+size*1/2,y+size*2/3,size/3)
        recursive(x+size*4/6,y+size*1/3,size/3)

background=canvas.create_rectangle(0,0,600,600,fill="black")
recursive(0,0,600)

root.mainloop()
