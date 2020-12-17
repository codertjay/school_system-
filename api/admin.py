from django.contrib import admin

from .models import Choice,GradedAssignment,Assignment,Question


admin.site.register(Choice)
admin.site.register(GradedAssignment)
admin.site.register(Assignment)
admin.site.register(Question)


