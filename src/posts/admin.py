from django.contrib import admin
from posts.models import Post, Tag, Reference

class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "published", "created_on", "last_updated")
    list_editable = ("published",)
    prepopulated_fields = {"slug": ("title",)}

class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)

class ReferenceAdmin(admin.ModelAdmin):
    list_display = ("name", "url")

admin.site.register(Post, PostAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Reference, ReferenceAdmin)
