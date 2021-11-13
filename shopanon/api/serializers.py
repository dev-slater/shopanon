from rest_framework import serializers
from main_app.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = ('id', 'cart','name','price','description','image','favorite')
    