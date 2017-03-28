# Create a method that decrypts texts/reversed_zen_lines.txt
def reserved_file():
    try:
        #read from Reserved.txt file
        file_read = open("Reserved.txt", "r")
        reserved_chars = file_read.read()
        normal_chars = reserved_chars[len(reserved_chars):0:-1]
        # write into a new file
        file_write = open(input("Input the file's name: "), "w")
        file_write.write(normal_chars)
        file_write.close()
        file_read.close()
    except FileNotFoundError:
        print("File doesn't exist!")

reserved_file()
