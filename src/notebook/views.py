from django.shortcuts import render

def notebook_index(request):
    return render(request, 'notebook_index.html')
