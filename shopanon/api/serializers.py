from rest_framework import serializers
from main_app.models import Product
from main_app.models import Cart


class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = ('id','name','price','description','image','favorite')

class CartSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Cart
        fields = ('id','name','description','author','products')