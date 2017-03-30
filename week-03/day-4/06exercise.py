# We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

def line_bunnies(n):
    if n == 1:
        return 2
    elif n%2 == 0: #even
        return line_bunnies(n - 1) + 3
    elif n%2 !=0: #odd
        return line_bunnies(n - 1) + 2

print(line_bunnies(8))
