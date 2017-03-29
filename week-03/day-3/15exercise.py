from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def lines(x,y,x1,y1,color):
    line = canvas.create_line(x,y,x1,y1,fill=color)
    return line

for i in range(0,301,15):
    lines(i,0,300,i,"magenta")
    lines(0,i,i,300,"green")



root.mainloop()
