# your_app/admin.py
from django.contrib import admin
from .models import ChatMessage

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('user_type', 'message', 'admin_response', 'timestamp')
    list_editable = ('admin_response',)
