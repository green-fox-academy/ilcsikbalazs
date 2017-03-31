from tkinter import *

root = Tk()

canvas = Canvas(root, width="600",  height='600')
canvas.pack()

def create_carpet(x,y,size):
    carpet = canvas.create_rectangle(x,y,x+size,y+size, fill ="black", outline="white")

def recusrsive(x,y,size):
    create_carpet(x,y,size)
    if size > 5:
        recusrsive(x,y,size/3)
        recusrsive(x+size*1/3,y,size/3)
        recusrsive(x+size*2/3,y,size/3)
        recusrsive(x,y+size*1/3,size/3)
        recusrsive(x,y+size*2/3,size/3)
        recusrsive(x+size*2/3,y+size*1/3,size/3)
        recusrsive(x+size*2/3,y+size*2/3,size/3)
        recusrsive(x+size*1/3,y+size*2/3,size/3)

recusrsive(0,0,600)

root.mainloop()
