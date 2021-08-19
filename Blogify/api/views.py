from .models import Category
from rest_framework import generics
from .serializers import CategorySerializer
from rest_framework import generics
from .models import Category
from .serializers import CategorySerializer


# Create your views here.


class FetchCategory(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
