from rest_framework import generics, permissions
from main_app.models import Product
from main_app.models import Cart
from .serializers import ProductSerializer
from .serializers import CartSerializer
from rest_framework.permissions import IsAdminUser, DjangoModelPermissions, BasePermission, SAFE_METHODS, IsAuthenticated

# Use this for cart permissions - not product 

class CartUserWritePermission(BasePermission):
    message = "Only Author may edit"
    
    def has_object_permission(self, request, view, obj):
        
        if request.method in SAFE_METHODS:
            return True
        
        return obj.author == request.user

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pass

class ProductDetail(generics.RetrieveDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pass

class CartList(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    pass

class CartDetail(generics.RetrieveUpdateDestroyAPIView, CartUserWritePermission):
    permission_classes = [CartUserWritePermission]
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    pass

class CreateProduct(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class AdminProductDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class UpdateProduct(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class DeleteProduct(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer