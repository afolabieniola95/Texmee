import turtle

t = turtle.Turtle()
t.speed(0)
turtle.bgcolor("white")

corlors = ["red", "yellow", "blue", "green", "orange", "purple"]
for i in range(360):
    t.color(corlors[i % 6])
    t.width(i / 100 + 1)
    t.forward(i * 3.5)
    t.left(59)

turtle.done()
