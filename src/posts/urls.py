from django.urls import path
from posts import views

urlpatterns = [
    path('', views.posts_index, name='postsIndex'),
    path('tags/', views.posts_tags, name='postsTags'),
]