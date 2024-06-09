from rest_framework import serializers
from .models import (
    User,
    Announcement,
    Post,
    Comment,
    Message,
    UserProfile,
    Notification,
    Grade,
    Subject,
    Subtopic

)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "username",
            "email",
            "datecreated",
            "occupation",
            "role",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True}}


class AnnouncementSerialiazer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Announcement
        fields = ["id", "user", "title", "description", "datecreated"]
        ordering = ["-datecreated"]

    def __str__(self):
        return self.user

class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class SubtopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtopic
        fields = '__all__'
class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Post
        fields = "__all__"
        ordering = ["-datecreated"]


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    post = PostSerializer()

    class Meta:
        model = Comment
        fields = [
            "id",
            "user",
            "post",
            "content",
            "created_at",
            "likes",
            "unlikes",
            "comments",
        ]


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.SlugRelatedField(
        many=False, slug_field="username", queryset=User.objects.all()
    )
    receiver = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    # receiver = serializers.SlugRelatedField(
    #     many=False, slug_field="username", queryset=User.objects.all()
    # )

    class Meta:
        model = Message
        fields = "__all__"


class NotificationSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Notification
        fields = "__all__"
