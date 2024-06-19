# Generated by Django 5.0.3 on 2024-06-19 13:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_comment_likes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='content',
            new_name='comment_content',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='content',
            new_name='post_content',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='unlikes',
        ),
        migrations.RemoveField(
            model_name='post',
            name='unlikes',
        ),
    ]