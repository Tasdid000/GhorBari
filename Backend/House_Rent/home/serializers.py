from rest_framework import serializers
from .models import *
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Util


class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ["email", "name", "phone_Number", "password", "password2"]
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
        fields = ["id", "email", "name", "image", "phone_Number", 'address']

class UpdateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=False)
    name = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = ("email", "name", "image", "phone_Number", "address")

    def validate_email(self, value):
        user = self.context['request'].user

        if value and User.objects.exclude(pk=user.pk).filter(email=value).exists():
            raise serializers.ValidationError({"email": "This email is already in use."})

        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user

        if user.pk != instance.pk:
            raise serializers.ValidationError({"authorize": "You don't have permission for this user."})

        instance.name = validated_data.get('name', instance.name)
        instance.image = validated_data.get('image', instance.image)
        instance.email = validated_data.get('email', instance.email)
        instance.phone_Number = validated_data.get('phone_Number', instance.phone_Number)
        instance.address = validated_data.get('address', instance.address)

        instance.save()

        return instance

class UserChangePasswordSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  class Meta:
    fields = ['password', 'password2']

  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    user = self.context.get('user')
    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password doesn't match")
    user.set_password(password)
    user.save()
    return attrs

class SendPasswordResetEmailSerializer(serializers.Serializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    fields = ['email']

  def validate(self, attrs):
    email = attrs.get('email')
    if User.objects.filter(email=email).exists():
      user = User.objects.get(email = email)
      uid = urlsafe_base64_encode(force_bytes(user.id))
      print('Encoded UID', uid)
      token = PasswordResetTokenGenerator().make_token(user)
      print('Password Reset Token', token)
      link = 'http://localhost:3000/apiv1/user/reset/'+uid+'/'+token
      print('Password Reset Link', link)
      # Send EMail
      body = 'Click Following Link to Reset Your Password '+link
      data = {
        'subject':'Reset Your Password',
        'body':body,
        'to_email':user.email
      }
      Util.send_email(data)
      return attrs
    else:
      raise serializers.ValidationError('You are not a Registered User')

class UserPasswordResetSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  class Meta:
    fields = ['password', 'password2']

  def validate(self, attrs):
    try:
      password = attrs.get('password')
      password2 = attrs.get('password2')
      uid = self.context.get('uid')
      token = self.context.get('token')
      if password != password2:
        raise serializers.ValidationError("Password and Confirm Password doesn't match")
      id = smart_str(urlsafe_base64_decode(uid))
      user = User.objects.get(id=id)
      if not PasswordResetTokenGenerator().check_token(user, token):
        raise serializers.ValidationError('Token is not Valid or Expired')
      user.set_password(password)
      user.save()
      return attrs
    except DjangoUnicodeDecodeError as identifier:
      PasswordResetTokenGenerator().check_token(user, token)
      raise serializers.ValidationError('Token is not Valid or Expired')


class Propertyserializers(serializers.ModelSerializer):

    class Meta:
        model = Property
        fields = '__all__'

class Contactserializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["id", "name","Email","phone_Number","Message"]
        
class PropertyInfoserializers(serializers.ModelSerializer):
    class Meta:
        model = PropertyInfo
        fields = ["propertyId", "name","Email","phone_Number","Message"]

class Postserializers(serializers.ModelSerializer):
    class Meta:
       model= Post
       fields = "__all__"

class Servicesserializers(serializers.ModelSerializer):
    class Meta:
       model= Services
       fields = ["id","image","employee_Name","email","mobile_Number","experience"]

class ScheduleViewingserializers(serializers.ModelSerializer):
    class Meta:
       model= ScheduleViewing
       fields = "__all__"

class Residentialinteriorserializers(serializers.ModelSerializer):
    class Meta:
       model= Residentialinterior
       fields = "__all__"

class CommercialInteriorserializers(serializers.ModelSerializer):
    class Meta:
       model= CommercialInterior
       fields = "__all__"


class ResidentialArchitectureserializers(serializers.ModelSerializer):
    class Meta:
       model= ResidentialArchitecture
       fields = "__all__"

class CommercialArchitectureserializers(serializers.ModelSerializer):
    class Meta:
       model= CommercialArchitecture
       fields = "__all__"

class Apply_For_Loanserializers(serializers.ModelSerializer):
    class Meta:
       model= Apply_For_Loan
       fields = "__all__"
class bank_detailsserializers(serializers.ModelSerializer):
    class Meta:
       model= bank_details
       fields = "__all__"


class requestForAddPropertyserializers(serializers.ModelSerializer):
    class Meta:
       model= requestForAddProperty
       fields = "__all__"

# class cityserializers(serializers.ModelSerializer):
#     class Meta:
#        model= city
#        fields = "__all__"

class notificationserializers(serializers.ModelSerializer):
    class Meta:
       model= notification
       fields = "__all__"


