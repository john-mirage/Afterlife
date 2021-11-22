import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Reference(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True, verbose_name='Nom')
    description = models.TextField(max_length=255, verbose_name='Description')
    url = models.URLField(unique=True, verbose_name='Adresse')

    class Meta:
        ordering = ['name']
        verbose_name = 'Référence'
    
    def __str__(self):
        return self.name

class Tag(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    excerpt = models.TextField(max_length=255)
    author = models.ForeignKey(User)
    tags = models.ManyToManyField(Tag)
    last_updated = models.DateTimeField(auto_now=True)
    created_on = models.DateTimeField()
    published = models.BooleanField(default=False)
    markdown = models.TextField()

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title