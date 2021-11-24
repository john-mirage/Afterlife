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
    name = models.CharField(max_length=50, unique=True, verbose_name='Nom')

    class Meta:
        ordering = ['name']
        verbose_name = 'Catégorie'

    def __str__(self):
        return self.name

class Story(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150, unique=True, verbose_name='Nom')
    description = models.TextField(max_length=255, verbose_name='Description')

    class Meta:
        ordering = ['name']
        verbose_name = 'Histoire'

    def __str__(self):
        return self.name

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, unique=True, verbose_name='Titre')
    slug = models.SlugField(max_length=255, unique=True)
    excerpt = models.TextField(max_length=255, verbose_name='Description')
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    story = models.ForeignKey(Story, on_delete=models.CASCADE, null=True)
    tags = models.ManyToManyField(Tag, verbose_name='Catégories')
    references = models.ManyToManyField(Reference, verbose_name='Références')
    last_updated = models.DateTimeField(auto_now=True)
    created_on = models.DateTimeField(blank=True, null=True)
    published = models.BooleanField(default=False, verbose_name="Publié")
    markdown = models.TextField(blank=True, verbose_name="Markdown")

    class Meta:
        ordering = ['-created_on']
        verbose_name = 'Article'

    def __str__(self):
        return self.title
