from tkinter import *

root = Tk()
canvas = Canvas(root, width="600", height="600")
canvas.pack()

# def create_koch(x,y,size):
#     koch = canvas.create_polygon(x,y+size/3, x+size/3,y+size/3, x+size/2,y, x+size*2/3,y+size/3, x+size,y+size/3, outline="black",fill="")
#
# def recursive(x,y,size):
#     create_koch(x,y,size)
#     if size > 50:
#         recursive(x,y,size/3)
# recursive(0,0,600)

def create_koch(x,y,size):
    koch1 = canvas.create_line(x,y+size/3, x+size/3,y+size/3)
    koch2 = canvas.create_line(x+size/3,y+size/3, x+size/2,y)
    koch3 = canvas.create_line(x+size/2,y, x+size*2/3,y+size/3)
    koch4 = canvas.create_line(x+size*2/3,y+size/3, x+size,y+size/3)

def recursive(x,y,size):
    create_koch(x,y,size)
    if size > 50:
        recursive(x,y,size/3)
recursive(0,0,600)





create_koch(0,0,600)


root.mainloop()
