# Fibonacci

# Write a function that computes a member of the fibonacci sequence by a given index
# Create tests that covers all types of input (like in the previous workshop exercise)

class Fibonacci:
    def fibonacci(self,n):
        if n == 0:
            return 0
        if n == 1:
            return 1
        else:
            return self.fibonacci(n-2) + self.fibonacci(n-1)
