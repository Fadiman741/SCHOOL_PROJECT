from django.urls import path
from .views import (
    signup,
    logout_view,
    login_view,
    create_announcement,
    announcement_list,
    update_announcement,
    grade_subject_list,
    grade_list, grade_detail, subject_list, subject_detail, subtopic_list, subtopic_detail,
    create_post,
    posts,
    update_post,
    create_comment,
    comments,
    update_comment,
    users,
    update_users,
    likepost,
    get_notifications,
    like_post, 
    dislike_post, 
    like_comment, 
    dislike_comment, 
    get_current_user,
    update_current_user,
    # notifications_view
    message_list,
    message_detail,
    mark_message_as_read,
    send_message
)

urlpatterns = [
    path("signup/", signup, name="signup"),
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
    path("create_announcement/", create_announcement, name="create_announcement"),
    path("announcements/", announcement_list, name="announcement_list"),
    path("announcement/<int:pk>/", update_announcement, name="update_announcement"),
    # path('grades/', grade_list, name='grade-list'),
    path('grades/', grade_subject_list, name='grade_subject_list'),
    path('grades/<int:pk>/', grade_detail, name='grade-detail'),
    path('subjects/', subject_list, name='subject-list'),
    path('subjects/<int:pk>/', subject_detail, name='subject-detail'),
    path('subtopics/', subtopic_list, name='subtopic-list'),
    path('subtopics/<int:pk>/', subtopic_detail, name='subtopic-detail'),

    path("create_post/", create_post, name="create_post"),
    path("posts/", posts, name="posts"),
    path("post/<int:pk>/", update_post, name="update_post"),
    path("posts/<int:pk>/like", likepost, name="likepost"),
    path('post/<int:post_id>/like/', like_post , name="like_post"),
    path('post/<int:post_id>/dislike/', dislike_post),
    path('posts/<int:post_id>/comments/', create_comment, name='create_comment'),
    # path("create_comment/", create_comment, name="create_comment"),
    path("comments/", comments, name="comment-list"),
    path("comment/<int:pk>/", update_comment, name="comment-detail"),
    path('comment/<int:comment_id>/like/', like_comment),
    path('comment/<int:comment_id>/dislike/', dislike_comment),
    path("users/", users, name="users"),
    path("update-users/<int:pk>/", update_users, name="update_users"),
    path("notifications/", get_notifications, name="get_notifications"),
    # path("notification/", notifications_view, name="notifications_view"),
    path('get_current_user/', get_current_user, name='get_current_user'),
    path('update_current_user/', update_current_user,name='update_current_user'),
    path('messages/', message_list, name='message_list'),
    path('messages/<int:pk>/', message_detail, name='message_detail'),
    path('messages/<int:pk>/mark-as-read/', mark_message_as_read, name='mark_message_as_read'),
    # New URL for sending a message
    path('messages/send/', send_message, name='send_message'),
    # path('announcements/', views.AnnouncementList.as_view(), name='announcement-list'),
]


# # from django.contrib import admin
# # from django.urls import path
# # # from users.views import announcement_list,create_announcement

# # urlpatterns = [
# #         # path('announcements/', announcement_list),
# #         # path('create/',create_announcement)
# # ]
# from django.urls import path
# from .views import register, login

# urlpatterns = [
#     path('signup/', register, name='user-register'),
#     path('login/', login, name='user-login'),
# ]
