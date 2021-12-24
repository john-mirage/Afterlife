from django.shortcuts import render

def notes_index(request):
    context = {'active_tab': 'notes'}
    return render(request, 'pages/notes_index.html', context)
