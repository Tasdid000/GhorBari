from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
# Create your models here.
#Create user manager
class MyUserManager(BaseUserManager):
    def create_user(self, email, name, phone_Number, password=None, password2=None):
        """
        Creates and saves a User with the given email, name, tc, password and password2.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            phone_Number=phone_Number,

        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, phone_Number , password=None):
        """
        Creates and saves a superuser with the given email, name, phone_Number and password.
        """
        user = self.create_user(
            email,
            password=password,
            name=name,
            phone_Number=phone_Number
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    image = models.ImageField(upload_to='media/userimage', default=" ")
    name = models.CharField(max_length=255)
    phone_Number = models.CharField(max_length=11, default="")
    address = models.CharField(max_length=300, default="")
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    crtate_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    objects = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "phone_Number"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    

type = (
    ('Apartment', 'Apartment'),
    ('Office', 'Office'),
    ('Land', 'Land')
)

Completion = (
    ('Ready', 'Ready'),
    ('Not Ready', 'Not Ready')
)

Purpose = (
    ('For Rent', 'For Rent'),
    ('For Sale', 'For Sale'),
)

class Property(models.Model):
    Reference_number = models.CharField(primary_key=True, max_length=200, unique=True)
    image0 = models.ImageField(upload_to="media/Property/images", default ="")
    image1 = models.ImageField(upload_to="media/Property/images", default ="")
    image2 = models.ImageField(upload_to="media/Property/images", default ="")
    image3 = models.ImageField(upload_to="media/Property/images", default ="")
    image4 = models.ImageField(upload_to="media/Property/images", default ="")
    image5 = models.ImageField(upload_to="media/Property/images", default ="")
    image6 = models.ImageField(upload_to="media/Property/images", default ="")
    image7 = models.ImageField(upload_to="media/Property/images", default ="")
    image8 = models.ImageField(upload_to="media/Property/images", default ="")
    image9 = models.ImageField(upload_to="media/Property/images", default ="")

    Floor_Plans = models.ImageField(upload_to="media/Property/images")
    rent_Amount = models.CharField(default="", max_length=200,)
    property_Address = models.TextField(max_length=999, default="")
    property_title = models.CharField(max_length=800, default="")
    Beds = models.CharField(default="", max_length=200)
    Baths = models.CharField(default="", max_length=200)
    property_Area = models.CharField(default="sqft", max_length=200)
    About_Property = models.TextField(max_length=2000, default="")
    type = models.CharField(max_length=100, default='', choices=type)
    Completion = models.CharField(max_length=100, default='', choices=Completion)
    Purpose = models.CharField(max_length=100, default='', choices=Purpose)
    Date = models.DateField(auto_now=True)

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=500)
    phone_Number= models.CharField(max_length=11, blank= False)
    Message = models.TextField()

class PropertyInfo(models.Model):
    propertyId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=500)
    phone_Number= models.CharField(max_length=11, blank= False)
    Message = models.TextField(default="")

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to="media/Blog/images", default ="")
    title = models.CharField(max_length=255)
    content = models.TextField()
    desc = models.TextField(default="")
    category = models.CharField(max_length=25015, default="")
    slug = models.CharField(max_length=130)
    TimeStamp = models.DateField(null=True)

    def __str__(self):
        return self.title + ' by ' + self.category
    

class Services(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(blank=True)
    employee_Name = models.CharField(max_length=255)
    email = models.EmailField(max_length=500)
    mobile_Number = models.BigIntegerField( null=False, blank=False, unique=True)
    experience = models.IntegerField(default="Years")

#RESIDENTIAL Interior
class Residentialinterior(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=500)
    phone_Number= models.CharField(max_length=11, blank= False)
    floor_Area = models.CharField(default="sqft", max_length=200)
    ideas = models.TextField()

#commercial Interior
class CommercialInterior(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=500)
    phone_Number= models.CharField(max_length=11, blank= False)
    floor_Area = models.CharField(default="sqft", max_length=200)
    ideas = models.TextField()


#Architecture Architecture
class ResidentialArchitecture(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=500)
    phone_Number= models.CharField(max_length=11, blank= False)
    floor_Area = models.CharField(default="sqft", max_length=200)
    ideas = models.TextField()

#Architecture Architecture
class CommercialArchitecture(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=500)
    phone_Number= models.CharField(max_length=11, blank= False)
    floor_Area = models.CharField(default="sqft", max_length=200)
    ideas = models.TextField()
     


TIME_CHOICES = (
    ("9:00 AM - 12:00 PM", "9:00 AM - 12:00 PM"),
    ("2:00 PM - 5:00 PM", "2:00 PM - 5:00 PM"),
    ("5:00 PM - 8:00 PM", "5:00 PM - 8:00 PM"),
)
class ScheduleViewing(models.Model):
    id = models.AutoField(primary_key=True)
    Property = models.ForeignKey(Property, on_delete=models.CASCADE, null=False, blank=False, default="")
    TIME_CHOICES = models.CharField(max_length=100, null=False, choices=TIME_CHOICES, default="")
    name = models.CharField(max_length=255, default="", null=False)
    mobile_Number = models.BigIntegerField( null=False, blank=False, default="+880")
    email = models.EmailField(max_length=500, null=False,default="")
    date = models.DateField(blank=False, auto_now=False)


class bank_details(models.Model):
    id = models.AutoField(primary_key=True)
    Max_Loan_Amount = models.CharField(max_length=200)
    bank_image = models.ImageField(upload_to="media/bank/images", default ="")
    bank_name = models.CharField(max_length=200)
    Interest_Rate= models.CharField(max_length=200)
    Tenure = models.CharField(max_length=100,default="Years")

class Apply_For_Loan(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=500)
    phone_Number= models.CharField(max_length=11, blank= False)
    property_id = models.CharField(max_length=200)
    bank_details = models.ForeignKey(bank_details,  on_delete=models.SET_NULL, null=True,)
# class city(models.Model):
#     city = models.CharField(max_length=200, default="")
City = (
    ('Sylhet', 'Sylhet'),
)
class requestForAddProperty(models.Model):
    id = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,)
    name= models.CharField(max_length=200)
    phoneNumber = models.CharField(max_length=11)
    Email = models.EmailField(max_length=300)
    Purpose = models.CharField(max_length=100,choices=Purpose)
    PropertyType = models.CharField(max_length=100,choices=type)
    PropertyLocation= models.CharField(max_length=500)
    city = models.CharField(max_length=100 ,choices=City, default="")
    Date = models.DateField(auto_now=True, blank=False)


class notification(models.Model):
    id = models.AutoField(primary_key=True)
    subject = models.CharField(max_length=300, default="" ) 
    Message = models.TextField()
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,)