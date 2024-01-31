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

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(
        data=request.data, context={'uid': uid, 'token': token})
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
    search_fields = ['Property_Address', 'type', 'rent_Amount', 'Beds', 'Baths']
    filter_backends = (filters.SearchFilter,)

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

class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = Postserializers

class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = Postserializers

class ServicesListAPIView(generics.ListAPIView):
    queryset= Services.objects.all()
    serializer_class= Servicesserializers
    search_fields = ['employee_Name', 'email', 'mobile_Number', 'experience']
    filter_backends = (filters.SearchFilter)

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
    
class notificationListAPIView(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    queryset= notification.objects.all()
    serializer_class= notificationserializers

# class cityListAPIView(generics.ListAPIView):
#     queryset= city.objects.all()
#     serializer_class= cityserializers

class PropertySearchAPIView(generics.ListAPIView):
    serializer_class = Propertyserializers

    def get_queryset(self):
        queryset = Property.objects.all()
        
        type_param = self.request.query_params.get('type')
        completion_param = self.request.query_params.get('Completion')
        purpose_param = self.request.query_params.get('Purpose')
        # Add other fields as needed for search
        
        if type_param:
            queryset = queryset.filter(type=type_param)
        if completion_param:
            queryset = queryset.filter(Completion=completion_param)
        if purpose_param:
            queryset = queryset.filter(Purpose=purpose_param)
        # Add filtering for other fields similarly
        
        return queryset
    

