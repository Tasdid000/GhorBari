from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView
from .serializers import *
from django.contrib.auth import authenticate
from .renderers import Userrenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
# Create your views here.


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserRegistrationAPIView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully. Check your email for verification."}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VerifyEmailAPIView(APIView):
    def post(self, request):
        serializer = VerifyEmailSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            verification_code = serializer.validated_data['verification_code']

            try:
                user = User.objects.get(email=email, verification_code=verification_code)
                if not user.email_verified:
                    user.email_verified = True
                    user.is_active = True
                    user.save()

                    # Create access and refresh tokens for the user
                    tokens = get_tokens_for_user(user)

                    return Response({
                        'message': 'Email verified successfully',
                        'tokens': tokens
                    }, status=status.HTTP_200_OK)
                else:
                    return Response({'message': 'Email is already verified'}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'Invalid email or verification code'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ResendVerificationEmailAPIView(APIView):
    def post(self, request):
        serializer = ResendVerificationEmailSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']

            try:
                user = User.objects.get(email=email)

                if not user.email_verified:
                    verification_code = str(secrets.randbelow(10**6)).zfill(6)
                    user.verification_code = verification_code
                    user.save()

                    data = {
                        "subject": "Resend Email Verification",
                        "body": f"Your new verification code is: {verification_code}",
                        "to_email": email,
                    }
                    Util.send_email(data)

                    return Response({"message": "Verification email resent successfully."}, status=status.HTTP_200_OK)
                else:
                    return Response({"message": "Email is already verified."}, status=status.HTTP_200_OK)

            except User.DoesNotExist:
                return Response({"error": "User with this email does not exist."}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class UserRegistrationView(APIView):
#     renderer_classes = [Userrenderer]

#     def post(self, request, format=None):
#         serializer = UserRegistrationSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         token = get_tokens_for_user(user)
#         return Response({'token': token, 'msg': 'User created successfully'}, status=status.HTTP_201_CREATED)

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

class UpdateProfileView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = UpdateUserSerializer

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

    def post(self, request, email, token, format=None):
        serializer = UserPasswordResetSerializer(
        data=request.data, context={'email': email, 'token': token})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password reset successfully'}, status=status.HTTP_200_OK)

# class PropertyListAPIView(generics.ListAPIView):
#     queryset= Property.objects.all()
#     serializer_class= Propertyserializers
#     search_fields = ['Property_Address', 'type', 'rent_Amount', 'Beds', 'Baths']
#     filter_backends = (filters.SearchFilter,)

class PropertyList(generics.ListAPIView):
    queryset = Property.objects.all()
    serializer_class = Propertyserializers
    # search_fields = ['Property_Address', 'type', 'rent_Amount', 'Beds', 'Baths', 'Purpose', 'Completion']
    # filter_backends = (filters.SearchFilter,)

class PropertyDetail(generics.RetrieveAPIView):
    queryset = Property.objects.all()
    serializer_class = Propertyserializers
    
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
    
class PropertyInfoAPIView(APIView):
    def get(self, request, format=None):
        PropertyInfo_list = PropertyInfo.objects.all()
        PropertyInfo_serializers = PropertyInfoserializers(PropertyInfo_list, many=True)
        return Response(PropertyInfo_serializers.data)

    def post(self, request, format=None):
        PropertyInfo_serializers = PropertyInfoserializers(data=request.data)
        if PropertyInfo_serializers.is_valid():
            PropertyInfo_serializers.save()
            return Response(PropertyInfo_serializers.data, status=status.HTTP_201_CREATED)
        return Response(PropertyInfo_serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class PropertyInfoDEtails(generics.RetrieveAPIView):
    queryset = PropertyInfo.objects.all()
    serializer_class = PropertyInfoserializers
    

class MarkPropertyInfoAsSeen(APIView):
    def get(self, request, id):
        try:
            PropertyInfo_instance = PropertyInfo.objects.get(pk=id)
            PropertyInfo_instance.mark_as_seen()
            serializer = PropertyInfoserializers(PropertyInfo_instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except PropertyInfo.DoesNotExist:
            return Response({"error": "PropertyInfo not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def patch(self, request, id):
        try:
            PropertyInfo_instance = PropertyInfo.objects.get(pk=id)
            PropertyInfo_instance.mark_as_seen()
            serializer = PropertyInfoserializers(PropertyInfo_instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except PropertyInfo.DoesNotExist:
            return Response({"error": "PropertyInfo not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        pass

class UnseenPropertyInfoCount(APIView):
    def get(self, request):
        try:
            userId = self.request.user.email
            unseen_propertyinfo_count = PropertyInfo.objects.filter(userId=userId, seen=False).count()
            return Response({'unseen_propertyinfo_count': unseen_propertyinfo_count}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = Postserializers

class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = Postserializers



class ResidentialinteriorAPIView(APIView):
    def get(self, request, format=None):
        residentialinterior_list = Residentialinterior.objects.all()
        residentialinterior_serializers = Residentialinteriorserializers(residentialinterior_list, many=True)
        return Response(residentialinterior_serializers.data)

    def post(self, request, format=None):
        residentialinterior_serializers = Residentialinteriorserializers(data=request.data)
        if residentialinterior_serializers.is_valid():
            residentialinterior_serializers.save()
            return Response(residentialinterior_serializers.data, status=status.HTTP_201_CREATED)
        return Response(residentialinterior_serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CommercialInteriorAPIView(APIView):
    def get(self, request, format=None):
        commercialInterior_list = CommercialInterior.objects.all()
        commercialInterior_serializers = CommercialInteriorserializers(commercialInterior_list, many=True)
        return Response(commercialInterior_serializers.data)

    def post(self, request, format=None):
        commercialInterior_serializers = CommercialInteriorserializers(data=request.data)
        if commercialInterior_serializers.is_valid():
            commercialInterior_serializers.save()
            return Response(commercialInterior_serializers.data, status=status.HTTP_201_CREATED)
        return Response(commercialInterior_serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    



class ResidentialArchitectureAPIView(APIView):
    def get(self, request, format=None):
        residentialArchitecture_list = ResidentialArchitecture.objects.all()
        residentialArchitecture_serializers = ResidentialArchitectureserializers(residentialArchitecture_list, many=True)
        return Response(residentialArchitecture_serializers.data)

    def post(self, request, format=None):
        residentialArchitecture_serializers = ResidentialArchitectureserializers(data=request.data)
        if residentialArchitecture_serializers.is_valid():
            residentialArchitecture_serializers.save()
            return Response(residentialArchitecture_serializers.data, status=status.HTTP_201_CREATED)
        return Response(residentialArchitecture_serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CommercialArchitectureAPIView(APIView):
    def get(self, request, format=None):
        commercialArchitecture_list = CommercialArchitecture.objects.all()
        commercialArchitecture_serializers = CommercialArchitectureserializers(commercialArchitecture_list, many=True)
        return Response(commercialArchitecture_serializers.data)

    def post(self, request, format=None):
        commercialArchitecture_serializers = CommercialArchitectureserializers(data=request.data)
        if commercialArchitecture_serializers.is_valid():
            commercialArchitecture_serializers.save()
            return Response(commercialArchitecture_serializers.data, status=status.HTTP_201_CREATED)
        return Response(commercialArchitecture_serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Apply_For_LoanAPIView(APIView):
    def get(self, request, format=None):
        apply_For_Loan_list = Apply_For_Loan.objects.all()
        apply_For_Loan_serializers = Apply_For_Loanserializers(apply_For_Loan_list, many=True)
        return Response(apply_For_Loan_serializers.data)

    def post(self, request, format=None):
        apply_For_Loan_serializers = Apply_For_Loanserializers(data=request.data)
        if apply_For_Loan_serializers.is_valid():
            apply_For_Loan_serializers.save()
            return Response(apply_For_Loan_serializers.data, status=status.HTTP_201_CREATED)
        return Response(apply_For_Loan_serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    
class requestForAddPropertyAPIView(APIView):
    # permission_classes=[IsAuthenticated]
    def get(self, request, format=None):
        requestForAddProperty_list = requestForAddProperty.objects.all()
        requestForAddProperty_serializers = requestForAddPropertyserializers(requestForAddProperty_list, many=True)
        return Response(requestForAddProperty_serializers.data)

    def post(self, request, format=None):
        requestForAddProperty_serializers = requestForAddPropertyserializers(data=request.data)
        if requestForAddProperty_serializers.is_valid():
            requestForAddProperty_serializers.save()
            return Response(requestForAddProperty_serializers.data, status=status.HTTP_201_CREATED)
        return Response(requestForAddProperty_serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class bank_detailsListAPIView(generics.ListAPIView):
    queryset= bank_details.objects.all()
    serializer_class= bank_detailsserializers
    
# class notificationListAPIView(generics.ListAPIView):
#     permission_classes=[IsAuthenticated]
#     queryset= notification.objects.all()
#     serializer_class= notificationserializers

class notificationList(generics.ListAPIView):
    queryset = notification.objects.all()
    serializer_class = notificationserializers

class notificationDetail(generics.RetrieveAPIView):
    queryset = notification.objects.all()
    serializer_class = notificationserializers


class MarkNotificationAsSeen(APIView):
    def get(self, request, id):
        try:
            notification_instance = notification.objects.get(pk=id)
            notification_instance.mark_as_seen()
            serializer = notificationserializers(notification_instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except notification.DoesNotExist:
            return Response({"error": "Notification not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def patch(self, request, id):
        try:
            notification_instance = notification.objects.get(pk=id)
            notification_instance.mark_as_seen()
            serializer = notificationserializers(notification_instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except notification.DoesNotExist:
            return Response({"error": "Notification not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        pass

class UnseenNotificationCount(APIView):
    def get(self, request):
        try:
            user = self.request.user  # Assuming you have authentication set up
            unseen_count = notification.objects.filter(user=user, seen=False).count()
            return Response({'unseen_count': unseen_count}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
# class cityListAPIView(generics.ListAPIView):
#     queryset= city.objects.all()
#     serializer_class= cityserializers

class PropertySearchAPIView(generics.ListAPIView):
    serializer_class = Propertyserializers

    def get_queryset(self):
        queryset = Property.objects.all()
        
        property_type_param = self.request.query_params.get('type')
        completion_status_param = self.request.query_params.get('Completion')
        purpose_param = self.request.query_params.get('Purpose')
        property_address_param = self.request.query_params.get('property_Address')
        beds_param = self.request.query_params.get('Beds')
        baths_param = self.request.query_params.get('Baths')
        
        if property_type_param:
            queryset = queryset.filter(type=property_type_param)
        if completion_status_param:
            queryset = queryset.filter(Completion=completion_status_param)
        if purpose_param:
            queryset = queryset.filter(Purpose=purpose_param)
        if property_address_param:
            # Update this line to use __icontains for partial matching
            queryset = queryset.filter(property_Address__icontains=property_address_param)
        if beds_param:
            queryset = queryset.filter(Beds=beds_param)
        if baths_param:
            queryset = queryset.filter(Baths=baths_param)
        
        return queryset
    

class ApplyJobAPIView(APIView):
    def get(self, request, format=None):
        ApplyJob_list = ApplyJob.objects.all()
        ApplyJob_serializers = ApplyJobserializers(ApplyJob_list, many=True)
        return Response(ApplyJob_serializers.data)

    def post(self, request, format=None):
        ApplyJob_serializers = ApplyJobserializers(data=request.data)
        if ApplyJob_serializers.is_valid():
            ApplyJob_serializers.save()
            return Response(ApplyJob_serializers.data, status=status.HTTP_201_CREATED)
        return Response(ApplyJob_serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    

class JobOpeningList(generics.ListAPIView):
    queryset = JobOpening.objects.all()
    serializer_class = JobOpeningserializers

class JobOpeningDetail(generics.RetrieveAPIView):
    queryset = JobOpening.objects.all()
    serializer_class = JobOpeningserializers


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user(request):
    user = request.user
    user.delete()
    return Response({'message': 'Account deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_requestaddproperty(request, id):
    try:
        requestaddproperty = requestForAddProperty.objects.get(id=id)
        requestaddproperty.delete()
        return JsonResponse({'message': 'Request add property deleted successfully'}, status=204)
    except requestForAddProperty.DoesNotExist:
        return JsonResponse({'message': 'Request add property not found'}, status=404)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=500)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_property(request, Reference_number):
    try:
        property = Property.objects.get(Reference_number=Reference_number)
        property.delete()
        return JsonResponse({'message': 'Property deleted successfully'}, status=204)
    except Property.DoesNotExist:
        return JsonResponse({'message': 'Property not found'}, status=404)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=500)
    
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_notification(request, id):
    try:
        notifications = notification.objects.get(id=id)
        notifications.delete()
        return JsonResponse({'message': 'notifications deleted successfully'}, status=204)
    except notification.DoesNotExist:
        return JsonResponse({'message': 'notifications not found'}, status=404)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=500)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_propertyInfo(request, propertyId):
    try:
        propertyInfo = PropertyInfo.objects.get(propertyId=propertyId)
        propertyInfo.delete()
        return JsonResponse({'message': 'PropertyInfo deleted successfully'}, status=204)
    except PropertyInfo.DoesNotExist:
        return JsonResponse({'message': 'PropertyInfo not found'}, status=404)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=500)
    

class ServicesListAPIView(generics.ListAPIView):
    queryset= Service.objects.all()
    serializer_class= Servicesserializers
    filter_backends = (filters.SearchFilter,)
    search_fields = ['Services']