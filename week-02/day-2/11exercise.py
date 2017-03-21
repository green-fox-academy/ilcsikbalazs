#first solution
current_hours = 14
current_minutes = 34
current_seconds = 42

seconds_left = 60 - current_seconds
minutes_left = 60 - current_minutes
hours_left = 24 - current_hours

if (current_seconds > 0):
	minutes_left= minutes_left - 1
if (current_minutes > 0):
	hours_left = hours_left - 1

print(hours_left, minutes_left, seconds_left)
print((hours_left*60)*60 + (minutes_left)*60 + seconds_left)
