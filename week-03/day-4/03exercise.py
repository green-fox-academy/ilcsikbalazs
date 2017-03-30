# Given a non-negative int n, return the sum of its digits recursively (no loops).
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
# divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

def sumofdigits(n):
    n1 = int(n/10)
    n2 = n%10
    if n >= 100:
        return sumofdigits(n1) + n2
    elif n >= 10:
        return n1 + n2
    else:
        return n1 + n2


print(sumofdigits(555))
