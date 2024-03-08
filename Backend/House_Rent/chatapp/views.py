# your_app/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ChatMessage
from .serializers import ChatMessageSerializer

class ChatView(APIView):
    def get(self, request, *args, **kwargs):
        messages = ChatMessage.objects.all().order_by('-timestamp')
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        message = request.data.get('message')
        user_type = request.data.get('user_type', 'user')  # Default to 'user' if not provided

        # Save the message to the database
        chat_message = ChatMessage.objects.create(user_type=user_type, message=message)

        # Serialize the saved message for response
        serializer = ChatMessageSerializer(chat_message)
        return Response(serializer.data)
