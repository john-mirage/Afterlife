from django.db import models
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()

class Reference(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=255)
    url = models.URLField(unique=True)

    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name

class Tag(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150, unique=True)
    description = models.TextField(max_length=255)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Note(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    tags = models.ManyToManyField(Tag)
    references = models.ManyToManyField(Reference)
    last_updated = models.DateTimeField(auto_now=True)
    created_on = models.DateTimeField(blank=True, null=True)
    markdown = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title
