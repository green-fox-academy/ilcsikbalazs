#Write a recursive function that takes one parameter: n and counts down from n.

def counter(n):
    if n == 1:
        return 1
    elif n > 1:
        # print(n)
        return counter(n - 1), n


print(counter(5))
