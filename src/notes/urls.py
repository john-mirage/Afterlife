from django.urls import path
from notes import views

urlpatterns = [
    path('', views.notes_index, name='notesIndex'),
]