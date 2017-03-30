# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

def power(n,a):
    if n == 1:
        return 1
    elif a == 1:
        return n
    else:
        return n * power(n,a-1)

print(power(5,3))
