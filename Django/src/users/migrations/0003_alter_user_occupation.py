# Generated by Django 5.0.3 on 2024-06-06 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='occupation',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
