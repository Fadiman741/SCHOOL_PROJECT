# Generated by Django 5.0.3 on 2024-04-09 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_notification_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='is_read',
            field=models.BooleanField(default=0),
        ),
    ]
