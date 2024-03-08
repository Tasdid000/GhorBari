from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.
class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    # form = UserChangeForm
    # add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ["email", "name", "phone_Number", "is_admin"]
    list_filter = ["is_admin"]
    fieldsets = [
        ('User Credentials', {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["name", "phone_Number","image","address"]}),
        ("Permissions", {"fields": ["is_admin", "is_active", "email_verified"]}),
    ]
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "image","address","name", "phone_Number", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email", "name", "phone_Number"]
    filter_horizontal = []


# Now register the new UserAdmin...
admin.site.register(User, UserAdmin)

class Propertyadmin(admin.ModelAdmin):
    list_display=["Reference_number", "property_Address", "rent_Amount"]
    class Meta:
        model = Property
admin.site.register(Property, Propertyadmin)

class Contactadmin(admin.ModelAdmin):
    list_display = ["id", "name", "Email"]
    class Meta:
        model = Contact
admin.site.register(Contact, Contactadmin)

class PropertyInfoadmin(admin.ModelAdmin):
    list_display = ["propertyId", "name", "Email"]
    class Meta:
        model = PropertyInfo
admin.site.register(PropertyInfo, PropertyInfoadmin)


class ResidentialinteriorAdmin(admin.ModelAdmin):
    list_display=["id", "name", 'Email']
    class Meta:
        model = Residentialinterior
admin.site.register(Residentialinterior, ResidentialinteriorAdmin)

class CommercialInterioradmin(admin.ModelAdmin):
    list_display=["id", "name", 'Email']
    class Meta:
        model = CommercialInterior
admin.site.register(CommercialInterior, CommercialInterioradmin)

class ResidentialArchitectureAdmin(admin.ModelAdmin):
    list_display=["id", "name", 'Email']
    class Meta:
        model = ResidentialArchitecture
admin.site.register(ResidentialArchitecture, ResidentialArchitectureAdmin)

class CommercialArchitectureadmin(admin.ModelAdmin):
    list_display=["id", "name", 'Email']
    class Meta:
        model = CommercialArchitecture
admin.site.register(CommercialArchitecture, CommercialArchitectureadmin)

@admin.register(Post)
class Postadmin(admin.ModelAdmin):
    class Media:
        js = ('tiny.js',)

class Servicesadmin(admin.ModelAdmin):
    list_display=["id", "employee_Name", 'experience', 'Services']
    class Meta:
        model = Service
admin.site.register(Service, Servicesadmin)


class ScheduleViewingadmin(admin.ModelAdmin):
    list_display=["id", "Property"]
    class Meta:
        model = ScheduleViewing
admin.site.register(ScheduleViewing, ScheduleViewingadmin)

class Apply_For_Loanadmin(admin.ModelAdmin):
    list_display=["id", "name", 'Email']
    class Meta:
        model = Apply_For_Loan
admin.site.register(Apply_For_Loan, Apply_For_Loanadmin)

class bank_detailsadmin(admin.ModelAdmin):
    list_display=["id", "bank_name"]
    class Meta:
        model = bank_details
admin.site.register(bank_details, bank_detailsadmin)

class requestForAddPropertyadmin(admin.ModelAdmin):
    list_display=["id", "name","phoneNumber"]
    class Meta:
        model = requestForAddProperty
admin.site.register(requestForAddProperty, requestForAddPropertyadmin)

# class cityadmin(admin.ModelAdmin):
#     list_display=["city"]
#     class Meta:
#         model = city
# admin.site.register(city, cityadmin)

class notificationadmin(admin.ModelAdmin):
    list_display=["id","Message"]
    class Meta:
        model = notification
admin.site.register(notification, notificationadmin)

class ApplyJobadmin(admin.ModelAdmin):
    list_display = ["id", "Name", "Email"]
    class Meta:
        model = ApplyJob
admin.site.register(ApplyJob, ApplyJobadmin)


class JobOpeningadmin(admin.ModelAdmin):
    list_display=['JobTitle','JobSchedule','Deadline']
    class Meta:
        model = JobOpening
admin.site.register(JobOpening, JobOpeningadmin)


# class ChatMessageadmin(admin.ModelAdmin):
#     list_display = ["user", "message"]
#     class Meta:
#         model = ChatMessage
# admin.site.register(ChatMessage, ChatMessageadmin)

