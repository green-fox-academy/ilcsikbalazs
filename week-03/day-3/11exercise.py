from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
def draw_square(x,y,color):
    square = canvas.create_rectangle(x,x,y,y,fill = color)
    return square
# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps/r3.png]
for i in range(150,0,-10):
    draw_square(i-5,i+5,"blue")


root.mainloop()
