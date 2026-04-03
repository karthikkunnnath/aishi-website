from django.contrib import admin
from .models import EngineeringProject, TechnicalEnquiry


@admin.register(EngineeringProject)
class EngineeringProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')


@admin.register(TechnicalEnquiry)
class TechnicalEnquiryAdmin(admin.ModelAdmin):
    list_display = ('client_name', 'service_interest', 'submitted_at')