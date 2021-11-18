from django.urls import path
from .views import ProductList, ProductDetail, CartList, CartDetail

app_name = 'api'

urlpatterns = [
    path('<int:pk>/', ProductDetail.as_view(), name='detailcreate'),
    path('', ProductList.as_view(), name='listcreate'),
    path('carts/', CartList.as_view(), name='listcreate'),
    path('carts/<int:pk>/', CartDetail.as_view(), name='detailcreate'),   
]