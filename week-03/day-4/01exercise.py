#Write a recursive function that takes one parameter: n and counts down from n.

def counter(n, list):

    if n <= 0:
        return list
    else:
        list.append(n)
        return counter(n - 1, list)#, n

list = []
print(counter(5, list))
