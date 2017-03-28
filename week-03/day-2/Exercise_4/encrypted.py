# Create a method that decrypts texts/encoded_zen_lines.txt
def decrypt():
    try:
        encrypted_file = open("Encrypted.txt","r")
        encrypted_text = encrypted_file.read()
        text = ""
        for i in range(len(encrypted_text)):
            if encrypted_text[i] == " ":
                text += " "
            elif encrypted_text[i] == "\n":
                text += "\n"    
            else:
                number_encrypt = ord(encrypted_text[i])
                number_encrypt -= 1
                number_decrypt = chr(number_encrypt)
                text += number_decrypt

        decoded_file = open(input("Input the name of your file: "), "w")
        decoded_file.write(text)
    except FileNotFoundError:
        print("You have to name the file!")

decrypt()
