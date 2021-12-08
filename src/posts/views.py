from django.shortcuts import render

def posts_index(request):
    return render(request, 'pages/posts_index.html')

def posts_tags(request):
    return render(request, 'pages/posts_tags.html')
