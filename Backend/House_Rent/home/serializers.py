from rest_framework import serializers
from .models import *
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator


class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ["email", "name", "tc", "password", "password2"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        password = attrs.get("password", "")
        password2 = attrs.get("password2", "")
        if password != password2:
            raise serializers.ValidationError(
                {"password": "Passwords must match"})
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = User
        fields = ["email", "password"]


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "name"]


class UserChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True)
    password2 = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ["password", "password2"]

    def validate(self, attrs):
        password = attrs.get("password", "")
        password2 = attrs.get("password2", "")
        user = self.context.get("user")
        if password != password2:
            raise serializers.ValidationError(
                {"password": "Passwords must match"})
        user.set_password(password)
        user.save()
        return attrs


class SendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        fields = ["email"]

    def validate(self, attrs):
        email = attrs.get("email", "")
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            print('encoded', uid)
            token = PasswordResetTokenGenerator().make_token(user)
            print('token', token)
            link = 'http://localhost:3000/api/user/reset/'+uid+'/'+token
            print("password reset link", link)
            # send Email
            
            data = {
                "subject": "Password Reset",
                'body': 'Hello, \n Please use the link below to reset your password \n' + link,
                'to_email' : user.email,
                
            }
            return attrs
        else:
            raise serializers.ValidationError("Email is not Registered.")


class UserPasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True)
    password2 = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True)

    class Meta:
        fields = ["password", "password2"]

    def validate(self, attrs):
        try:
            password = attrs.get("password", "")
            password2 = attrs.get("password2", "")
            uid = self.context.get("uid", "")
            token = self.context.get("token", "")
            if password != password2:
                raise serializers.ValidationError(
                    {"password": "Passwords must match"})
            id = smart_str(urlsafe_base64_decode(uid))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise serializers.ValidationError(
                    'Token is not valid or Expired')
            user.set_password(password)
            user.save()
            return attrs
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user, token)
            raise serializers.ValidationError('Token is not valid or Expired')


class propertyserializers(serializers.ModelSerializer):

    class Meta:
        model = property
        fields = '__all__'

class Contactserializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["id", "name","Email","phone_Number","Message"]

class Postserializers(serializers.ModelSerializer):
    class Meta:
       model= Post
       fields = ["id","image","title","content","desc","athour","slug","TimeStamp"]

class Servicesserializers(serializers.ModelSerializer):
    class Meta:
       model= Services
       fields = ["id","image","employee_Name","email","mobile_Number","experience"]

class ScheduleViewingserializers(serializers.ModelSerializer):
    class Meta:
       model= ScheduleViewing
       fields = "__all__"