# Generated by Django 5.0.3 on 2024-06-07 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_remove_user_occupation'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='occupation',
            field=models.CharField(max_length=100, null=True),
        ),
    ]