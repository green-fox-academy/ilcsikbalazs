from tkinter import *

root = Tk()

canvas = Canvas(root, width="1000",  height='600')
canvas.pack()

backgound_oval = canvas.create_oval(0,0,1000,600, fill="black")
backgound_oval = canvas.create_oval(50,50,950,550, fill="yellow")
base_oval = canvas.create_oval(80,80,920,520, fill="black")
base_wing_upper = canvas.create_oval(300,100,400,200, fill="yellow")
base_wing_upper = canvas.create_oval(600,100,700,200, fill="yellow")



root.mainloop()
