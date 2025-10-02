# String methods:
# String Multi line using triple brackets:

# str = """ Hello Divyanshu
# Welcome to python world"""
# print(str)


# ------------------------------------------
# length of string -> len() method

# sentence = "Hello World!"
# print(len(sentence)) # Output: 12 (includes the space and exclamation mark)

# ------------------------------------------
# indexing:

# s = "Python"
# # Positive indexing
# print(s[0])   # Output: P
# print(s[2])   # Output: t

# # Negative indexing
# print(s[-1])  # Output: n
# print(s[-3])  # Output: h

# ------------------------------------------
# Slicing in python

my_string = " अपना College "
# Index:    0123456789012 (forward)
# Index:   -3-2-1 ...    (backward)

# 1. Basic Slice (Get "अपना")
# Starts at index 1 and ends *before* index 5
first_word = my_string[1:5]
print(first_word)  # Output: अपना

# 2. Slice to the End (Get "College")
# Starts at index 6 and goes all the way to the end
second_word = my_string[6:]
print(second_word) # Output: College

# 3. Slice from the Beginning (Get "अपना")
# Starts from the beginning and ends *before* index 5
first_word_again = my_string[:5]
print(first_word_again) # Output:  अपना (includes the leading space)

# 4. Slicing with Negative Indices (Get "College")
# Starts at the 7th character from the end (-7) and goes to the end
last_word_negative = my_string[-7:]
print(last_word_negative) # Output: College