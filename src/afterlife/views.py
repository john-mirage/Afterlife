from django.shortcuts import render

def afterlife_index(request):
    context = {'active_tab': 'home'}
    return render(request, 'pages/afterlife/index.html', context)
