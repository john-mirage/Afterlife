from django.shortcuts import render
from django.http import HttpResponse

def blog_index(request):
    return render(request, 'pages/blog_index.html')

def blog_post(request):
    return HttpResponse('Blog post')

def blog_story(request):
    return HttpResponse('Blog story')

def blog_tags(request):
    return render(request, 'pages/blog_tags.html')

def blog_tag(request):
    return HttpResponse('Blog tag')
