from django.contrib import admin
from django.urls import include, path
from afterlife import views

urlpatterns = [
    path('', views.afterlife_index, name='afterlifeIndex'),
    path('posts/', include('posts.urls')),
    path('stories/', include('stories.urls')),
    path('notes/', include('notes.urls')),
    path('admin/', admin.site.urls),
]
