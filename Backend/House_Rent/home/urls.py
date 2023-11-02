from django.urls import path
from .views import *
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('userprofile/', UserProfileView.as_view(), name='userprofile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('Property/', PropertyListAPIView.as_view()),
    path('Contact/feedback', ContactAPIView.as_view()),
    path('Post/', PostListAPIView.as_view()),
    path('Services/', ServicesListAPIView.as_view()),
    path('ScheduleViewing/', ScheduleViewingAPIView.as_view()),
]