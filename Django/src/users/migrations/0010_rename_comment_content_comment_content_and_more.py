# Generated by Django 5.0.3 on 2024-06-19 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_rename_content_comment_comment_content_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='comment_content',
            new_name='content',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='post_content',
            new_name='content',
        ),
        migrations.AddField(
            model_name='comment',
            name='unlikes',
            field=models.IntegerField(default=0, null=True),
        ),
    ]