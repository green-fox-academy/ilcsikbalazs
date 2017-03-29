from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
def draw_square(row,coloumn,color):
    square = canvas.create_rectangle(row,coloumn,row+60,coloumn+60,fill = color)
    return square
# fill the canvas with a checkerboard pattern.


numbers = [0,60,120,180,240]

for i in range(0,5):
    for j in range(0,5):
        if (i%2 == 0) and (j%2 == 0):
            draw_square(numbers[i],numbers[j],"black")
        elif (i%2 != 0) and (j%2 != 0):
            draw_square(numbers[i],numbers[j],"black")
        

# draw_square(0,0,"white")
# draw_square(60,0,"white")
# draw_square(120,0,"white")
# draw_square(180,0,"white")
# draw_square(240,0,"white")

root.mainloop()
