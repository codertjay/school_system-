from django.contrib import admin
from .models import User
from .models import Student
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


# Register your models here.

class UserAdmin(BaseUserAdmin):
    add_fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_student', 'is_teacher', 'password1',
                       'password2')
        }),
        ('Permissions',{
            'fields': ('is_superuser','is_staff')
        })
    )
    fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_student', 'is_teacher', 'password')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    list_display = ['email','username','is_student','is_teacher']
    search_fields = ('email','username')
    ordering = ('email',)


admin.site.register(User, UserAdmin)
admin.site.register(Student)
admin.site.unregister(Group)
