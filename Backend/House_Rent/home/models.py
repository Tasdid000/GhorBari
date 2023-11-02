from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
# Create your models here.
#Create user manager
class MyUserManager(BaseUserManager):
    def create_user(self, email, name, tc, password=None, password2=None):
        """
        Creates and saves a User with the given email, name, tc, password and password2.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            tc=tc,

        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, tc , password=None):
        """
        Creates and saves a superuser with the given email, name, tc and password.
        """
        user = self.create_user(
            email,
            password=password,
            name=name,
            tc=tc
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=255)
    tc = models.BooleanField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    crtate_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    objects = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "tc"]

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
    ('Office', 'Office')
)

Completion = (
    ('Ready', 'Ready'),
    ('Not Ready', 'Not Ready')
)

Purpose = (
    ('For Rent', 'For Rent'),
    ('For Sale', 'For Sale')
)

class property(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(blank=True)
    image1 = models.ImageField(blank=True)
    image2 = models.ImageField(blank=True)
    image3 = models.ImageField(blank=True)
    image4 = models.ImageField(blank=True)
    image5 = models.ImageField(blank=True)
    image6 = models.ImageField(blank=True)
    image7 = models.ImageField(blank=True)
    image8 = models.ImageField(blank=True)
    image9 = models.ImageField(blank=True)
    Floor_Plans = models.ImageField(blank=True)
    rent_Amount = models.CharField(default="BDT", max_length=200)
    property_Address = models.TextField(max_length=999, default="")
    Beds = models.CharField(default="Beds", max_length=200)
    Baths = models.CharField(default="Baths", max_length=200)
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
    phone_Number = models.BigIntegerField(null=False, blank=False, unique=True)
    Message = models.TextField()


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.URLField(max_length=1000)
    title = models.CharField(max_length=255)
    content = models.TextField()
    desc = models.CharField(max_length=25015, default="")
    athour = models.CharField(max_length=1023)
    slug = models.CharField(max_length=130)
    TimeStamp = models.DateTimeField(null=True)

    def __str__(self):
        return self.title + ' by ' + self.athour
    

class Services(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(blank=True)
    employee_Name = models.CharField(max_length=255)
    email = models.EmailField(max_length=500)
    mobile_Number = models.BigIntegerField( null=False, blank=False, unique=True)
    experience = models.IntegerField(default="Years")

TIME_CHOICES = (
    ("9:00 AM - 12:00 PM", "9:00 AM - 12:00 PM"),
    ("2:00 PM - 5:00 PM", "2:00 PM - 5:00 PM"),
    ("5:00 PM - 8:00 PM", "5:00 PM - 8:00 PM"),
)
class ScheduleViewing(models.Model):
    id = models.AutoField(primary_key=True)
    property = models.ForeignKey(property, on_delete=models.CASCADE, null=False, blank=False, default="")
    TIME_CHOICES = models.CharField(max_length=100, null=False, choices=TIME_CHOICES, default="")
    name = models.CharField(max_length=255, default="", null=False)
    mobile_Number = models.BigIntegerField( null=False, blank=False, unique=True, default="+880")
    email = models.EmailField(max_length=500, null=False,default="")
    date = models.DateField(blank=False, auto_now=False)