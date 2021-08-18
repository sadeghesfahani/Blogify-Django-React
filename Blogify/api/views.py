from django.shortcuts import render
from .models import Category
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from .serializers import CategorySerializer

# Create your views here.


class FetchCategory(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
