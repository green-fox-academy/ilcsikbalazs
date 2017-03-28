# Create a method that decrypts the texts/duplicated_chars.txt
def duplicated_file():
    try:
        file_read = open(input('Input the file you want to read from: '), 'r')
        doubled_chars = file_read.read()
        text = ""
        for i in range(0,len(doubled_chars)+1,2):
            chars = doubled_chars[i]
            text += chars
        file_write = open(input('Input the file you want to write to: '), 'w')
        file_write.write(text)
        file_write.close()
        file_read.close()
    except FileNotFoundError:
        print("File doesn't exist!")

#'Double.txt','Double_done.txt'
duplicated_file()
