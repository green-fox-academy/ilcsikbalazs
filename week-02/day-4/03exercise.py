# Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
# Also, the URL is missing a crucial component, find out what it is and insert it too!
#
# url = "https//www.reddit.com/r/nevertellmethebots"
#
# print(url)

url = "https//www.reddit.com/r/nevertellmethebots"
url = url.replace("bots", "odds")

url_split = url.split("//")
print(url_split)
a=""
for i in url_split:
    if i == 'https':
        a += i + '://'
    else:
        a = a+i
        print(a)
