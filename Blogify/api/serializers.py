from .models import Category
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_title', 'show_in_navbar', 'children', 'parent']

    children = serializers.ListField(source='calc_children')
