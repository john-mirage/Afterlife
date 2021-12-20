from django.shortcuts import render

def afterlife_index(request):
    context = {'active_navigation': 'home'}
    return render(request, 'pages/afterlife_index.html', context)
