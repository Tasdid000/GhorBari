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
    list_display = ["id","email", "name", "tc", "is_admin"]
    list_filter = ["is_admin"]
    fieldsets = [
        ('User Credentials', {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["name", "tc"]}),
        ("Permissions", {"fields": ["is_admin"]}),
    ]
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "name", "tc", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email", "id"]
    filter_horizontal = []


# Now register the new UserAdmin...
admin.site.register(User, UserAdmin)

class propertyadmin(admin.ModelAdmin):
    list_display=["id", "property_Address", "rent_Amount"]
    class Meta:
        model = property
admin.site.register(property, propertyadmin)

class Contactadmin(admin.ModelAdmin):
    list_display = ["id", "name", "Email"]
    class Meta:
        model = Contact
admin.site.register(Contact, Contactadmin)

@admin.register(Post)
class Postadmin(admin.ModelAdmin):
    class Media:
        js = ('tiny.js',)

class Servicesadmin(admin.ModelAdmin):
    list_display=["id", "employee_Name", "email"]
    class Meta:
        model = Services
admin.site.register(Services, Servicesadmin)


class ScheduleViewingadmin(admin.ModelAdmin):
    list_display=["id", "property"]
    class Meta:
        model = ScheduleViewing
admin.site.register(ScheduleViewing, ScheduleViewingadmin)