from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def lines(x,y,x1,y1):
    line = canvas.create_line(x,y,x1,y1,fill="green")
    return line

for i in range(150,301,15):
    lines(300,i,i,150)

root.mainloop()
