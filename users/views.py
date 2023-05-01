from rest_framework import views, status
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer
from django.contrib.auth import logout
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import UserManager, User
from rest_framework.exceptions import APIException

class RegisterView(views.APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.create(user=user)
            return Response({'token': token.key})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class LoginView(views.APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    objects = UserManager()

    def post(self, request, *args, **kwargs):
        user_data = request.data
        username = user_data.get('username')
        password = user_data.get('password')

        user, created = User.objects.get_or_create(username=username)
        user.set_password(password)
        user.save()

        token, created = Token.objects.get_or_create(user=user)

        return Response({'token': token.key}, status=status.HTTP_200_OK)


class LogoutView(views.APIView):
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'message': 'Successfully logged out.'})


class ProtectedView(views.APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        return Response({'message': 'Hello, authenticated user!'})


class TokenRevokeView(views.APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        try:
            token = Token.objects.get(user=request.user)
        except Token.DoesNotExist:
            raise APIException("Token not found", status.HTTP_404_NOT_FOUND)
        
        try:
            token.delete()
        except Exception as e:
            raise APIException("Failed to revoke token: " + str(e))
        return Response({'message': 'Token revoked successfully.'})

# 94697d69ee661d1f884f30031bb06379f4e089f2