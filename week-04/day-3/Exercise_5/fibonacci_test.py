import unittest
from fibonacci import Fibonacci

class Test_Fibonacci(unittest.TestCase):
    def test_fibonacci_randnum(self):
        fib = Fibonacci()
        fib.fibonacci(10)
        self.assertEquals(fib.fibonacci(10), 55)

if __name__ == "__main__":
    unittest.main()