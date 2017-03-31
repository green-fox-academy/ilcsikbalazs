from tkinter import *

root = Tk()

canvas = Canvas(root, width="600",  height='600')
canvas.pack()

def rectangle_creator(x,y,size):
    rectangle = canvas.create_rectangle(x,y,x+size,y+size,fill="yellow")

def recursive(x,y,size):
    rectangle_creator(x,y,size)
    if size > 5:
        recursive(x+size*1/3,y,size/3)
        recursive(x+size*1/3,y+size*2/3,size/3)
        recursive(x,y+size*1/3,size/3)
        recursive(x+size*2/3,y+size*1/3,size/3)

recursive(0,0,500)
root.mainloop()
