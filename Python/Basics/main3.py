# Typecasting

# Q: 1 Implicit casting
a = 10
b = 20.5
print(a + b) # Output: 30.5

# Treating boolean value as integer
    # True -> 1
    # False -> 0
print(True + True) # Output: 2
print(True + False) # Output: 1
print(False + 2) # Output: 2


# --------------------------------------------------

# Q: 2 Explicit casting

# Converting a Tuple (1 argument) into a List
my_tuple = (10, "20", 30)
print(list(my_tuple)) # Works! -> [10, '20', 30]

# Converting a String (1 argument) into a List of letters
text = "Hello"
print(list(text))     # Works! -> ['H', 'e', 'l', 'l', 'o']



