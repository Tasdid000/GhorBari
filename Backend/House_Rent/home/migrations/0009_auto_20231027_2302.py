# Generated by Django 3.2.20 on 2023-10-27 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_services'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='phone_Number',
            field=models.BigIntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='services',
            name='mobile_Number',
            field=models.BigIntegerField(unique=True),
        ),
    ]
