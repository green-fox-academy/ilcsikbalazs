# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.

def no_file(filename):
    try:
        file = open(filename, "r")
        file_readlines = file.readlines()
        counter = 0
        for i in file_readlines:
            counter += 1
        print(counter)
        file.close()

    except FileNotFoundError:
        print("File doesn't exist!")


no_file(str(input("Input file name: ")))
