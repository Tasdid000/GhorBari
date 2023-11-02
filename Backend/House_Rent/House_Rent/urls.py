from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
admin.site.site_header = "House Rent Admin"
admin.site.site_title = "House Rent Admin Panel"
admin.site.index_title ="Welcome to House Rent Admin Panel"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiv1/user/', include("home.urls")),
]
urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)