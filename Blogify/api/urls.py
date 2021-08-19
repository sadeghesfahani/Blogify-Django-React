from .views import FetchCategory
from django.urls import path

urlpatterns = [
    path('', FetchCategory.as_view()),
]
