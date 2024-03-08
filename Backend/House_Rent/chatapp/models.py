# your_django_app/models.py
from django.db import models

class ChatMessage(models.Model):
    user_type = models.CharField(max_length=255)
    message = models.TextField()
    admin_response = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user_type} - {self.message}'
