from django.urls import path
from .views import ProductList, ProductDetail, CartList, CartDetail, CreateProduct, DeleteProduct, UpdateProduct, AdminProductDetail

app_name = 'api'

urlpatterns = [
    path('<int:pk>/', ProductDetail.as_view(), name='detailcreate'),
    path('', ProductList.as_view(), name='listcreate'),
    path('carts/', CartList.as_view(), name='listcreate'),
    path('carts/<int:pk>/', CartDetail.as_view(), name='detailcreate'),  
    path('admin/create/', CreateProduct.as_view(), name="createproduct"), 
    path('admin/edit/productdetail/<int:pk>/', AdminProductDetail.as_view(), name="admindetailproduct"), 
    path('admin/edit/<int:pk>/', UpdateProduct.as_view(), name="updateproduct"), 
    path('admin/delete/<int:pk>/', DeleteProduct.as_view(), name="deleteproduct"), 
]