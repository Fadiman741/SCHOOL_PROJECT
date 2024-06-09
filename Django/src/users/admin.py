from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User,Post,Announcement,Comment,Grade,Subject

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'date_joined', 'is_staff')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    readonly_fields = ('date_joined',)

admin.site.register(User, CustomUserAdmin)
admin.site.register(Post)
admin.site.register(Announcement)
admin.site.register(Comment)
admin.site.register(Grade)
admin.site.register(Subject)


