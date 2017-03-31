from tkinter import *

root = Tk()

canvas = Canvas(root, width="600",  height='600')
canvas.pack()

def create_grid(x,y,size,width):
    grid = canvas.create_rectangle(x,y,x+size,y+size,width=width)

def recusrsive(x,y,size,width):
    create_grid(x,y,size,width)
    if size > 80:
        recusrsive(x-size/4,y-size/4,size/2,width/2)
        recusrsive(x+size*3/4,y+size*3/4,size/2,width/2)
        recusrsive(x+size*3/4,y+size*3/4,size/2,width/2)
        recusrsive(x+size*3/4,y-size/4,size/2,width/2)
        recusrsive(x-size/4,y+size*3/4,size/2,width/2)



recusrsive(150,150,300,10)

root.mainloop()
