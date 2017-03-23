# When saving this quote a disk error has occured. Please fix it.
# Add "always takes longer than" to the StringBuilder (quote) between the words "It" and "you"

# quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
#
# print(quote)

add_this = "It always takes longer than you"
quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
splitted_quote = quote.split("It you")

print(str(splitted_quote[0]) + add_this + str(splitted_quote[1]))
