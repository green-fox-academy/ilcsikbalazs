# Add "My todo:" to the beginning of the todoText
# Add " - Download games" to the end of the todoText
# Add " - Diablo" to the end of the todoText but with indention

# Expected outpt:

# My todo:
#  - Buy milk
#  - Download games
#      - Diablo

todoText = " - Buy milk\n"
# Hozzá kell adni a Download games-t
todoText += " - Download games\n" + "     - Diablo"
mytodoText = "My todo:\n"
todoText = mytodoText + todoText
print(todoText)
