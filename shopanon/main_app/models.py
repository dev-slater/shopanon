from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

    
class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null=True)
    price = models.IntegerField()
    image = models.CharField(max_length=250)
    favorite = models.BooleanField(null=True)
    slug = models.SlugField(max_length=250, unique_for_date='timestamp')
    timestamp = models.DateTimeField(default=timezone.now)    
    
class Cart(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, blank=True)
    def __str__(self):
        return self.name