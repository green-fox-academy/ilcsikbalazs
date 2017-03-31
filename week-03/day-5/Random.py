from tkinter import *

root = Tk()

canvas = Canvas(root, width="600",  height='600')
canvas.pack()

def create_oval(x,y,size,color):
    oval = canvas.create_oval(x,y,x+size,y+size,fill=color, outline="aqua",width="5")

def create_rectangle(x,y,size,color):
    rectangle = canvas.create_rectangle(x,y,x+size,y+size,fill=color,outline="cyan",width="5")

def oval_recusrsive(x,y,size):
    create_oval(x,y,size,"dimgray")
    if size > 20:
        oval_recusrsive(x+size/4,y,size/2)

def rec_recrsive(x,y,size):
    create_rectangle(x,y,size,"teal")
    if size > 10:
        rec_recrsive(x+size/4,y+size*3/4,size/2)

background = canvas.create_rectangle(0,0,600,600,fill="black")
oval_recusrsive(110,0,1000)
rec_recrsive(0,0,200)


root.mainloop()
