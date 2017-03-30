# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def summary(n):
    if n == 1:
        return 1
    if n > 1:
        print(n)
        return n + summary(n-1)

print(summary(5))
