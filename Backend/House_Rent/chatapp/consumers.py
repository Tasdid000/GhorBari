# # your_app/consumers.py
# import json
# from channels.generic.websocket import AsyncWebsocketConsumer

# class ChatConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         await self.accept()

#     async def disconnect(self, close_code):
#         pass

#     async def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json['message']
#         user_type = text_data_json['user_type']

#         # Handle the message as needed (store in the database, etc.)
#         # For simplicity, we'll echo the message back with user_type
#         response_data = {'message': message, 'user_type': user_type}

#         if user_type == 'user':
#             # Simulate an admin response for demo purposes
#             admin_response = f"Admin response to: {message}"
#             response_data['admin_response'] = admin_response

#             # Send the admin response to the user
#             await self.send(text_data=json.dumps({'message': admin_response, 'user_type': 'admin'}))

#         # Send the original message or admin response back to the user
#         await self.send(text_data=json.dumps(response_data))
