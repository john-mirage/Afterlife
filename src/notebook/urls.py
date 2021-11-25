from django.urls import path
from notebook import views

urlpatterns = [
    path('', views.notebook_index, name='notebookIndex'),
]