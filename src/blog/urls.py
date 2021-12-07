from django.urls import path
from blog import views

urlpatterns = [
    path('', views.blog_index, name='blogIndex'),
    path('post/<slug:slug>/', views.blog_post, name='blogPost'),
    path('story/<str:name>/', views.blog_story, name='blogStory'),
    path('tags/', views.blog_tags, name='blogTags'),
    path('tag/<str:name>/', views.blog_tag, name='blogTag')
]