from django.test import TestCase

# Create your tests here.

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserAPITestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username='testuser', 
            password='testpassword',
            first_name='Test',
            last_name='User',
            email='testuser@example.com',
            occupation='Tutor')
        self.token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
    
#     def test_get_current_user_authenticated(self):
#         url = reverse('get_current_user')
#         response = self.client.get(url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(response.data['email'], 'testuser@example.com')
    
    def test_get_current_user_not_authenticated(self):
        self.client.force_authenticate(user=None)
        url = reverse('get_current_user')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
    
#     def test_update_current_user(self):
#         url = reverse('update_current_user')
#         data = {
#             'first_name': 'Updated',
#             'last_name': 'User',
#             'email': 'updateduser@example.com',
#             'occupation': 'Engineer'
#         }
#         response = self.client.put(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.user.refresh_from_db()
#         self.assertEqual(self.user.first_name, 'Updated')
#         self.assertEqual(self.user.last_name, 'User')
#         self.assertEqual(self.user.email, 'updateduser@example.com')
    
#     def test_update_current_user_invalid_data(self):
#         url = reverse('update_current_user')
#         data = {
#             'email': 'not-an-email'
#         }
#         response = self.client.put(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
#     def test_login_view(self):
#         self.client.logout()
#         url = reverse('login_view')
#         data = {
#             'email': 'testuser@example.com',
#             'password': 'testpassword'
#         }
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertIn('token', response.data)
    
#     def test_login_view_invalid_credentials(self):
#         self.client.logout()
#         url = reverse('login_view')
#         data = {
#             'email': 'testuser@example.com',
#             'password': 'wrongpassword'
#         }
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
    
#     def test_logout_view(self):
#         url = reverse('logout_view')
#         response = self.client.post(url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(response.data['success'], 'Logged out successfully')

# # Make sure to map these URLs correctly in your urls.py
