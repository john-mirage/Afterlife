from django.shortcuts import render

def posts_index(request):
    context = {'active_navigation': 'posts'}
    return render(request, 'pages/posts_index.html', context)

def posts_tags(request):
    return render(request, 'pages/posts_tags.html')
