from django.urls import path
from .views import LoginView, RegisterView, LogoutView, TokenRevokeView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/revoke/', TokenRevokeView.as_view(), name='token_revoke'),
    path('privatepath/', TokenRevokeView.as_view(), name='private_path'),
]
