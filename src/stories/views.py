from django.shortcuts import render

def stories_index(request):
    context = {'active_tab': 'stories'}
    return render(request, 'pages/stories_index.html', context)
