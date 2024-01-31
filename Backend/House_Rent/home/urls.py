from django.urls import path
from .views import *
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('userprofile/', UserProfileView.as_view(), name='userprofile'),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('Property/', PropertyList.as_view()),#
    path('Property/<str:pk>/', PropertyDetail.as_view()),
    path('Contact/feedback', ContactAPIView.as_view()),
    path('propertyinfo/', PropertyInfoAPIView.as_view()),
    path('Post/', PostList.as_view()),
    path('Post/<int:pk>/', PostDetail.as_view()),
    path('Services/', ServicesListAPIView.as_view()),
    path('ScheduleViewing/', ScheduleViewingAPIView.as_view()),
    path('Residentialinterior/ResidentialinteriorContact', ResidentialinteriorAPIView.as_view()),
    path('Commercialinterior/CommercialInteriorContact', CommercialInteriorAPIView.as_view()), 
    path('ResidentialArchitecture/ResidentialArchitectureContact', ResidentialArchitectureAPIView.as_view()),
    path('CommercialArchitecture/CommercialArchitectureContact', CommercialArchitectureAPIView.as_view()), 
    path('bank_details/', bank_detailsListAPIView.as_view()),
    path('apply_for_loan/bank', Apply_For_LoanAPIView.as_view()),
    path('properties-search/', PropertySearchAPIView.as_view(), name='property-search'),
    path('requestForAddProperty/requestinfo', requestForAddPropertyAPIView.as_view()),
    # path('city/', cityListAPIView.as_view()),
    path('notification/', notificationListAPIView.as_view()),
]