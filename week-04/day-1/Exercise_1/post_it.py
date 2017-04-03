# Create a PostIt class that has
# a backgroundColor
# a text on it
# a textColor
# Create a few example post-it objects:
# an orange with blue text: "Idea 1"
# a pink with black text: "Awesome"
# a yellow with green text: "Superb!"

class PostIt:
    backgroundColor = ""
    text = ""
    textColor = ""

example1 = PostIt()
example2 = PostIt()
example3 = PostIt()

example1.backgroundColor = "orange"
example1.text = "Idea 1"
example1.textColor = "blue"

example2.backgroundColor = "pink"
example2.text = "Awesome"
example2.textColor = "black"

example3.backgroundColor = "yellow"
example3.text = "Superb!"
example3.textColor = "green"
