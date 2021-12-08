from django.shortcuts import render

def notes_index(request):
    return render(request, 'pages/notes_index.html')
