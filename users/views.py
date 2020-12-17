from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer


class UserViewSets(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
