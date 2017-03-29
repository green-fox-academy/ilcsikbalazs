from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
def draw_square(size):
    square = canvas.create_rectangle(size,size,size*2,size*2,fill = "blue")
    return square

start = 5
for i in range(0,4):
    start = start * 2
    draw_square(start)


root.mainloop()
