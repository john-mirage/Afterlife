from django.shortcuts import render

def stories_index(request):
    return render(request, 'pages/stories_index.html')
