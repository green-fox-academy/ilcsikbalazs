# Create a method that decrypts texts/reversed_zen_order.txt

def reversed_order():
    reserved_rows = open("Reserved_order.txt", "r")
    reserved_list = reserved_rows.readlines()
    text = ""
    for i in range(len(reserved_list)-1,0,-1):
        text += reserved_list[i]

    file_write = open(input("Input the file's name: "), "w")
    file_write.write(text)


reversed_order()
