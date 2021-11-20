import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    priority = models.IntegerField(default=0)
    color = models.CharField(max_length=50)

    class Meta:
        ordering = ['title']
    
    def __str__(self):
        return self.title

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category)
    subject = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-date']
    
    def __str__(self):
        return self.subject