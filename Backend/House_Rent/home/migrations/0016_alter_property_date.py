# Generated by Django 3.2.20 on 2023-10-31 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0015_alter_property_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='Date',
            field=models.DateField(),
        ),
    ]
