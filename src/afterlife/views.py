from django.shortcuts import render

def afterlife_index(request):
    return render(request, 'pages/afterlife_index.html')
