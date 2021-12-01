from django.shortcuts import render

def notebook_index(request):
    return render(request, 'pages/notebook_index.html')
