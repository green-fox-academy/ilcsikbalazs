from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


# def triangles(x,y):
#     triangle = canvas.create_polygon(x,y+10,x+20,y+10,x+10,y-10)
#     return triangle
#     triangles(100,200)

# background = canvas.create_rectangle(0,0,300,300, fill = "black")

def lines(x,y):
    line_a = canvas.create_line(x,y+10,x+10,y+10)
    line_b = canvas.create_line(x+10,y+10,x+5,y)
    line_c = canvas.create_line(x+5,y,x,y+10)

lines(50,50)



root.mainloop()
