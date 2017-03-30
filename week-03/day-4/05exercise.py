# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

def bunnies(n):
    ears = n * 2
    if n == 1:
        return ears
    else:
        return bunnies(n-1), ears

print(bunnies(9))
