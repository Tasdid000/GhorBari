from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView
from .serializers import *
from django.contrib.auth import authenticate
from .renderers import Userrenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
# Create your views here.


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserRegistrationView(APIView):
    renderer_classes = [Userrenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({'token': token, 'msg': 'User created successfully'}, status=status.HTTP_201_CREATED)


class UserLoginView(APIView):
    renderer_classes = [Userrenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get("email")
        password = serializer.data.get("password")
        user = authenticate(email=email, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg': 'User logged in successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': {'non_field_error': ['Invalid email or password']}}, status=status.HTTP_404_NOT_FOUND)


class UserProfileView(APIView):
    renderer_classes = [Userrenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserChangePasswordView(APIView):
    renderer_classes = [Userrenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={'user': request.user})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password changed successfully'}, status=status.HTTP_200_OK)
        


class SendPasswordResetEmailView(APIView):
    renderer_classes = [Userrenderer]

    def post(self, request, format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password reset link sent successfully. Please check the Email.'}, status=status.HTTP_200_OK)
       


class UserPasswordResetView(APIView):
    renderer_classes = [Userrenderer]

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(
        data=request.data, context={'uid': uid, 'token': token})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password reset successfully'}, status=status.HTTP_200_OK)

class PropertyListAPIView(generics.ListAPIView):
    queryset= property.objects.all()
    serializer_class= propertyserializers
    search_fields = ['property_Address', 'type', 'rent_Amount', 'Beds', 'Baths']
    filter_backends = (filters.SearchFilter,)


class ScheduleViewingAPIView(APIView):
    def get(self, request, format=None):
        ScheduleViewing_list = ScheduleViewing.objects.all()
        ScheduleViewing_serializers = ScheduleViewingserializers(ScheduleViewing_list, many=True)
        return Response(ScheduleViewing_serializers.data)

    def post(self, request, format=None):
        ScheduleViewing_serializers = ScheduleViewingserializers(data=request.data)
        if ScheduleViewing_serializers.is_valid():
            ScheduleViewing_serializers.save()
            return Response(ScheduleViewing_serializers.data, status=status.HTTP_201_CREATED)
        return Response(ScheduleViewing_serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactAPIView(APIView):
    def get(self, request, format=None):
        contact_list = Contact.objects.all()
        contact_serializers = Contactserializers(contact_list, many=True)
        return Response(contact_serializers.data)

    def post(self, request, format=None):
        contact_serializers = Contactserializers(data=request.data)
        if contact_serializers.is_valid():
            contact_serializers.save()
            return Response(contact_serializers.data, status=status.HTTP_201_CREATED)
        return Response(contact_serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class PostListAPIView(generics.ListAPIView):
    queryset= Post.objects.all()
    serializer_class= Postserializers

class ServicesListAPIView(generics.ListAPIView):
    queryset= Services.objects.all()
    serializer_class= Servicesserializers
    search_fields = ['employee_Name', 'email', 'mobile_Number', 'experience']
    filter_backends = (filters.SearchFilter,)