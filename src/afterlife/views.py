from django.shortcuts import render

def afterlife_index(request):
    context = {'active_tab': 'home'}
    return render(request, 'pages/afterlife_index/afterlife_index.html', context)
