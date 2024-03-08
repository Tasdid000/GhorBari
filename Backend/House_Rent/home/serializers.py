from rest_framework import serializers
from .models import *
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes, force_text
from .utils import Util
from rest_framework.exceptions import AuthenticationFailed
import secrets
class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)
    verification_code = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ["email", "name", "phone_Number", "password", "password2", "verification_code"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        password = attrs.get("password", "")
        password2 = attrs.get("password2", "")
        if password != password2:
            raise serializers.ValidationError({"password": "Passwords must match"})
        return attrs

    def create(self, validated_data):
        verification_code = validated_data.pop("verification_code", None)
        if not verification_code:
            verification_code = str(secrets.randbelow(10**6)).zfill(6)

        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data["password"])
        user.is_active = False
        user.verification_code = verification_code
        user.save()

        data = {
            "subject": "Email Verification",
            "body": f"Your verification code is: {verification_code}",
            "to_email": validated_data["email"],
        }
        Util.send_email(data)

        return user



# class UserRegistrationSerializer(serializers.ModelSerializer):
#     password2 = serializers.CharField(
#         style={"input_type": "password"}, write_only=True)

#     class Meta:
#         model = User
#         fields = ["email", "name", "phone_Number", "password", "password2"]
#         extra_kwargs = {"password": {"write_only": True}}

#     def validate(self, attrs):
#         password = attrs.get("password", "")
#         password2 = attrs.get("password2", "")
#         if password != password2:
#             raise serializers.ValidationError(
#                 {"password": "Passwords must match"})
#         return attrs

#     def create(self, validated_data):
#         return User.objects.create_user(**validated_data)
    



class VerifyEmailSerializer(serializers.Serializer):
    email = serializers.EmailField()
    verification_code = serializers.CharField()

class ResendVerificationEmailSerializer(serializers.Serializer):
    email = serializers.EmailField()


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = User
        fields = ["email", "password"]

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "name", "image", "phone_Number", 'address']

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
      email = urlsafe_base64_encode(force_bytes(user.pk))
      print('Encoded UID', email)
      token = PasswordResetTokenGenerator().make_token(user)
      print('Password Reset Token', token)      
      link = f'http://localhost:3000/apiv1/user/reset/{email}/{token}'
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
      email = self.context.get('email')
      token = self.context.get('token')
      if password != password2:
        raise serializers.ValidationError("Password and Confirm Password doesn't match")
      uid = force_text(urlsafe_base64_decode(email))
      user = User.objects.get(pk=uid)
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
        fields = "__all__"

class Postserializers(serializers.ModelSerializer):
    class Meta:
       model= Post
       fields = "__all__"

class Servicesserializers(serializers.ModelSerializer):
    class Meta:
       model= Service
       fields = ["id","image","employee_Name", "experience", 'Services']

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
#JobOpening

class ApplyJobserializers(serializers.ModelSerializer):
    class Meta:
        model = ApplyJob
        fields = "__all__"

class JobOpeningserializers(serializers.ModelSerializer):
    class Meta:
       model= JobOpening
       fields = "__all__"



