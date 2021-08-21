from .views import index, test
from django.urls import path

urlpatterns = [
    path('', index, name='index'),
    path('/test/', test),
]
