import datetime
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=255, unique=True)
    datecreated = models.DateTimeField(auto_now_add=True)
    # profile_pic = models.CharField(max_length=100)
    occupation = models.CharField(
        max_length=100
    )  # Teacher / Department / Student / Tutor
    # profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    years_of_experience = models.CharField(max_length=100, blank=True, null=True)
    role = models.CharField(max_length=100, blank=True, null=True)
    subjects = models.CharField(max_length=255, blank=True, null=True)
    school = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    languages = models.CharField(max_length=255, blank=True, null=True)
    facebook = models.URLField(max_length=200, blank=True, null=True)
    twitter = models.URLField(max_length=200, blank=True, null=True)
    linkedin = models.URLField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name"]

    def __str__(self):
        return self.email


class Announcement(models.Model):
    user = models.ForeignKey(
        User, related_name="announcements", on_delete=models.CASCADE
    )
    description = models.CharField(max_length=10000)
    title = models.CharField(max_length=100)
    datecreated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Grade(models.Model):
    name = models.CharField(max_length=50)

class Subject(models.Model):
    name = models.CharField(max_length=100)
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE)

class Subtopic(models.Model):
    name = models.CharField(max_length=100)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0, null=True)
    unlikes = models.IntegerField(default=0, null=True)
    comments = models.IntegerField(default=0, null=True)


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(User, default=0, null=True)
    unlikes = models.IntegerField(default=0, null=True)
    comments = models.IntegerField(default=0, null=True)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Message(models.Model):
    sender = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="sent_messages"
    )
    recipient = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="received_messages"
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return self.content


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField(max_length=255, default="Notification")
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=0, null=False)

    def __str__(self):
        return self.content
