from django.db import models
from django.core.validators import FileExtensionValidator


class EngineeringProject(models.Model):
    CATEGORY_CHOICES = [
        ('CR', 'Cleanrooms'),
        ('IOT', 'IoT Solutions'),
        ('FIRE', 'Fire Systems'),
        ('INT', 'Interior Works'),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(max_length=4, choices=CATEGORY_CHOICES)
    description = models.TextField()
    main_image = models.ImageField(upload_to='projects/images/')
    video_url = models.URLField(blank=True, help_text="Link to project video (YouTube/Vimeo)")

    def __str__(self):
        return self.title


class TechnicalEnquiry(models.Model):
    client_name = models.CharField(max_length=100)
    email = models.EmailField()
    service_interest = models.CharField(max_length=100)

    cad_drawing = models.FileField(
        upload_to='enquiries/drawings/',
        validators=[FileExtensionValidator(allowed_extensions=['dwg', 'max', 'pdf', 'zip'])]
    )

    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Enquiry from {self.client_name} - {self.service_interest}"