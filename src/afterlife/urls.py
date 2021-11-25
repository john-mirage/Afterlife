from django.contrib import admin
from django.urls import include, path
from afterlife import views

urlpatterns = [
    path('', views.afterlife_index, name='afterlifeIndex'),
    path('blog/', include('blog.urls')),
    path('notebook/', include('notebook.urls')),
    path('admin/', admin.site.urls),
]
