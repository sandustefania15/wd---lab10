from django.db import models
class Post(models.Model):
    title = models.CharField(max_length=200)
    post_date = models.DateField()
    image = models.ImageField(upload_to='images/')
    paragraph = models.TextField(max_length=2000)
    more_details_for_the_dedicated_page = models.TextField(
        max_length=1000, default=' '
    ) 
def __str__(self):
    return self.title