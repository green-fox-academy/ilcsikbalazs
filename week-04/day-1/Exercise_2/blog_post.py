# Create a BlogPost class that has
# an authorName
# a title
# a text
# a publicationDate
# Create a few blog post objects:
# "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
# Lorem ipsum dolor sit amet.
# "Wait but why" titled by Tim Urban posted at "2010.10.10."
# A popular long-form, stick-figure-illustrated blog about almost everything.
# "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
# Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

class BlogPost:
    authorName = ""
    title = ""
    text = ""
    publicationDate = ""

blog1 = BlogPost()
blog1.authorName = "John Doe\n"
blog1.title = "Lorem Isup\n"
blog1.text = "Lorem ipsum dolor sit amet.\n"
blog1.publicationDate = "2000.05.04.\n"

blog2 = BlogPost()
blog2.authorName = "Tim Urban\n"
blog2.title = "Wait but why\n"
blog2.text = "A popular long-form, stick-figure-illustrated blog about almost everything.\n"
blog2.publicationDate = "2010.10.10.\n"

blog3 = BlogPost()
blog3.authorName = "William Turton\n"
blog3.title = "One Engineer Is Trying to Get IBM to Reckon With Trump\n"
blog3.text = "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.\n"
blog3.publicationDate = "2017.03.28.\n"

print(blog3.authorName + blog3.title + blog3.text + blog3.publicationDate)
