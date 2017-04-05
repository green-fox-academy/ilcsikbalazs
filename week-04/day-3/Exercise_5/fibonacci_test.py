import unittest
from fibonacci import Fibonacci

class Test_Fibonacci(unittest.TestCase):
    def test_fibonacci_randnum(self):
        fib = Fibonacci()
        fib.fibonacci(10)
        self.assertEquals(fib.fibonacci(10), 55)

    def test_fibonacci_zero(self):
        fib = Fibonacci()
        fib.fibonacci(0)
        self.assertEquals(fib.fibonacci(0), 0)

    def test_fibonacci_one(self):
        fib = Fibonacci()
        fib.fibonacci(1)
        self.assertEquals(fib.fibonacci(1), 1)

if __name__ == "__main__":
    unittest.main()