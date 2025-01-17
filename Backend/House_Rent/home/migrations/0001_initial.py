# Generated by Django 3.2.20 on 2024-03-07 15:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=255, primary_key=True, serialize=False, unique=True, verbose_name='email address')),
                ('image', models.ImageField(default=' ', upload_to='media/userimage')),
                ('name', models.CharField(max_length=255)),
                ('phone_Number', models.CharField(default='', max_length=11)),
                ('address', models.CharField(default='', max_length=300)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('crtate_date', models.DateTimeField(auto_now_add=True)),
                ('update_date', models.DateTimeField(auto_now=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='bank_details',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Max_Loan_Amount', models.CharField(max_length=200)),
                ('bank_image', models.ImageField(default='', upload_to='media/bank/images')),
                ('bank_name', models.CharField(max_length=200)),
                ('Interest_Rate', models.CharField(max_length=200)),
                ('Tenure', models.CharField(default='Years', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='CommercialArchitecture',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('Email', models.EmailField(max_length=500)),
                ('phone_Number', models.CharField(max_length=11)),
                ('floor_Area', models.CharField(default='sqft', max_length=200)),
                ('ideas', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='CommercialInterior',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('Email', models.EmailField(max_length=500)),
                ('phone_Number', models.CharField(max_length=11)),
                ('floor_Area', models.CharField(default='sqft', max_length=200)),
                ('ideas', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('Email', models.EmailField(max_length=500)),
                ('phone_Number', models.CharField(max_length=11)),
                ('Message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='JobOpening',
            fields=[
                ('JobTitle', models.CharField(max_length=500, primary_key=True, serialize=False, unique=True)),
                ('JobSchedule', models.CharField(choices=[('Full-Time', 'Full-Time'), ('Part-Time', 'Part-Time')], max_length=100)),
                ('Deadline', models.DateField()),
                ('AboutJob', models.TextField()),
                ('JobRequirements', models.TextField()),
                ('Experience', models.TextField()),
                ('Education', models.TextField()),
                ('JobLocation', models.CharField(default='', max_length=200)),
                ('Benefits', models.TextField()),
                ('Note', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(default='', upload_to='media/Blog/images')),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField()),
                ('desc', models.TextField(default='')),
                ('category', models.CharField(default='', max_length=25015)),
                ('slug', models.CharField(max_length=130)),
                ('TimeStamp', models.DateField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Property',
            fields=[
                ('Reference_number', models.CharField(max_length=200, primary_key=True, serialize=False, unique=True)),
                ('userphone_Number', models.CharField(default='', max_length=11)),
                ('image0', models.ImageField(default='', upload_to='media/Property/images')),
                ('image1', models.ImageField(default='', upload_to='media/Property/images')),
                ('image2', models.ImageField(default='', upload_to='media/Property/images')),
                ('image3', models.ImageField(default='', upload_to='media/Property/images')),
                ('image4', models.ImageField(default='', upload_to='media/Property/images')),
                ('image5', models.ImageField(default='', upload_to='media/Property/images')),
                ('image6', models.ImageField(default='', upload_to='media/Property/images')),
                ('image7', models.ImageField(default='', upload_to='media/Property/images')),
                ('image8', models.ImageField(default='', upload_to='media/Property/images')),
                ('image9', models.ImageField(default='', upload_to='media/Property/images')),
                ('Floor_Plans', models.ImageField(upload_to='media/Property/images')),
                ('rent_Amount', models.CharField(default='', max_length=200)),
                ('property_Address', models.TextField(default='', max_length=999)),
                ('property_title', models.CharField(default='', max_length=800)),
                ('Beds', models.CharField(default='', max_length=200)),
                ('Baths', models.CharField(default='', max_length=200)),
                ('property_Area', models.CharField(default='sqft', max_length=200)),
                ('About_Property', models.TextField(default='', max_length=2000)),
                ('type', models.CharField(choices=[('Apartment', 'Apartment'), ('Office', 'Office'), ('Land', 'Land')], default='', max_length=100)),
                ('Completion', models.CharField(choices=[('Ready', 'Ready'), ('Not Ready', 'Not Ready')], default='', max_length=100)),
                ('Purpose', models.CharField(choices=[('For Rent', 'For Rent'), ('For Sale', 'For Sale')], default='', max_length=100)),
                ('Date', models.DateField(auto_now=True)),
                ('userId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ResidentialArchitecture',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('Email', models.EmailField(max_length=500)),
                ('phone_Number', models.CharField(max_length=11)),
                ('floor_Area', models.CharField(default='sqft', max_length=200)),
                ('ideas', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Residentialinterior',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('Email', models.EmailField(max_length=500)),
                ('phone_Number', models.CharField(max_length=11)),
                ('floor_Area', models.CharField(default='sqft', max_length=200)),
                ('ideas', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(blank=True, upload_to='')),
                ('employee_Name', models.CharField(default='', max_length=255)),
                ('experience', models.IntegerField(default='Years')),
                ('Services', models.CharField(choices=[('Residential Interior', 'Residential Interior'), ('Commercial Interior', 'Commercial Interior'), ('Residential Architecture', 'Residential Architecture'), ('Commercial Architecture', 'Commercial Architecture')], default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ScheduleViewing',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('TIME_CHOICES', models.CharField(choices=[('9:00 AM - 12:00 PM', '9:00 AM - 12:00 PM'), ('2:00 PM - 5:00 PM', '2:00 PM - 5:00 PM'), ('5:00 PM - 8:00 PM', '5:00 PM - 8:00 PM')], default='', max_length=100)),
                ('name', models.CharField(default='', max_length=255)),
                ('mobile_Number', models.BigIntegerField(default='+880')),
                ('email', models.EmailField(default='', max_length=500)),
                ('date', models.DateField()),
                ('Property', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='home.property')),
                ('UserId', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='requestForAddProperty',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('phoneNumber', models.CharField(max_length=11)),
                ('Email', models.EmailField(max_length=300)),
                ('image0', models.ImageField(default='', upload_to='media/Property/images')),
                ('image1', models.ImageField(default='', upload_to='media/Property/images')),
                ('image2', models.ImageField(default='', upload_to='media/Property/images')),
                ('image3', models.ImageField(default='', upload_to='media/Property/images')),
                ('image4', models.ImageField(default='', upload_to='media/Property/images')),
                ('image5', models.ImageField(default='', upload_to='media/Property/images')),
                ('image6', models.ImageField(default='', upload_to='media/Property/images')),
                ('image7', models.ImageField(default='', upload_to='media/Property/images')),
                ('image8', models.ImageField(default='', upload_to='media/Property/images')),
                ('image9', models.ImageField(default='', upload_to='media/Property/images')),
                ('Floor_Plans', models.ImageField(default='', upload_to='media/Property/images')),
                ('rent_Amount', models.CharField(default='', max_length=200)),
                ('property_Address', models.TextField(default='', max_length=999)),
                ('Beds', models.CharField(default='', max_length=200)),
                ('Baths', models.CharField(default='', max_length=200)),
                ('property_Area', models.CharField(default='sqft', max_length=200)),
                ('About_Property', models.TextField(default='', max_length=2000)),
                ('PropertyType', models.CharField(choices=[('Apartment', 'Apartment'), ('Office', 'Office'), ('Land', 'Land')], default='', max_length=100)),
                ('Completion', models.CharField(choices=[('Ready', 'Ready'), ('Not Ready', 'Not Ready')], default='', max_length=100)),
                ('Purpose', models.CharField(choices=[('For Rent', 'For Rent'), ('For Sale', 'For Sale')], default='', max_length=100)),
                ('Date', models.DateField(auto_now=True)),
                ('city', models.CharField(choices=[('Sylhet', 'Sylhet')], default='', max_length=100)),
                ('userId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PropertyInfo',
            fields=[
                ('propertyId', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('Email', models.EmailField(max_length=500)),
                ('phone_Number', models.CharField(max_length=11)),
                ('Message', models.TextField(default='')),
                ('date', models.DateField(auto_now=True)),
                ('seen', models.BooleanField(default=False)),
                ('userId', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='notification',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('subject', models.CharField(default='', max_length=300)),
                ('Message', models.TextField()),
                ('sender', models.CharField(default='Admin', max_length=200)),
                ('date', models.DateField(auto_now=True)),
                ('seen', models.BooleanField(default=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ApplyJob',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(default='', max_length=500)),
                ('Email', models.EmailField(max_length=300)),
                ('phoneNumber', models.CharField(max_length=11)),
                ('Degree', models.CharField(choices=[('BSC In CSE', 'BSC In CSE'), ('BSC In EEE', 'BSC In EEE'), ('BSC In ETE', 'BSC In ETE'), ('Professional Certification', 'Professional Certification'), ('Bachelor Degree', 'Bachelor Degree'), ('ITIL', 'ITIL'), ('CCNA', 'CCNA'), ('MTCNA', 'MTCNA')], max_length=100)),
                ('CV', models.FileField(upload_to='media/CV')),
                ('JobPosition', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='home.jobopening')),
            ],
        ),
        migrations.CreateModel(
            name='Apply_For_Loan',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('Email', models.EmailField(max_length=500)),
                ('phone_Number', models.CharField(max_length=11)),
                ('property_id', models.CharField(max_length=200)),
                ('bank_details', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='home.bank_details')),
            ],
        ),
    ]
