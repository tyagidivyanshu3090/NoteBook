# Q 1.  String Multi line using triple brackets:

print(''' We are printing multiple line 
string using single quote''')

print()

print(""" We are printing multiple line 
string using double quote""")

print()

# -------------------------------------------------------------------

# Q 2. Escape sequence character:

print("Hello world\n Welcome to python world")

print()

# -------------------------------------------------------------------

# Q 3. Displaying double quote in string:

print("Hello world \"Welcome to python world\". Are you new to python?")

# -------------------------------------------------------------------

# Q4: Joining the string use separator:

print("Hello", "world", "Welcome to python world", sep="-") 
# Output: Hello-world-Welcome to python world
# The default separator is a space. 
# sep = 'separator'. Specify how to separate the objects, and insert this string between the objects.

# -------------------------------------------------------------------

# Q5: end parameter:

print("Hello", "world", "Welcome to python world", end="-")
# Output: Hello-world-Welcome to python world-

# The default value is \n (line feed).
# end = 'end'. Specify what to print at the end.
