# Q: 1 Data type and there type function value:

a = 10
print(type(a)) # <class 'int'>  

b = 10.5
print(type(b)) # <class 'float'>

c = "Hello"
print(type(c)) # <class 'str'>

d = True
print(type(d)) # <class 'bool'>

e = None
print(type(e)) # <class 'NoneType'>

# -------------------------------------------------------------------

# List and tuple:

list = [1, 2, 3, 4, 5]
tuple = (1, 2, 3, 4, 5)

print(type(list)) # <class 'list'>

# tuple[0] = 10 # TypeError: 'tuple' object does not support item assignment
print(tuple)    # (1, 2, 3, 4, 5)

# -------------------------------------------------------------------

# Math and random:

import math   # <--- unlock the toolbox
import random # <--- unlock the random toolbox

number = 5.7

# --- Built-in Tools (No import needed) ---
print("Round:", round(number))  # Output: 6
print("Max:", max(5, 10, 2))    # Output: 10
print("Abs:", abs(-50))         # Output: 50

# --- Tools from 'math' Module ---
print("Floor:", math.floor(number)) # Output: 5
print("Ceil:", math.ceil(number))   # Output: 6
print("Sqrt:", math.sqrt(25))       # Output: 5.0
print("Pi:", math.pi)               # Output: 3.14159...

# --- Tools from 'random' Module ---
print("Random:", random.random())   # Output: 0.123... (random number 0-1)