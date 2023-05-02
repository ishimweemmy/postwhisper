from django.urls import path
from .views import LoginView, RegisterView, LogoutView, TokenRevokeView, ProtectedView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/revoke/', TokenRevokeView.as_view(), name='token_revoke'),
    path('privatepath/', ProtectedView.as_view(), name='private_path'),
]
