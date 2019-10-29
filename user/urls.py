from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('register/',views.register,name='register'),
    path('shop/',views.shop,name='shop'),
    path('shop/pshop/<shop_id>',views.pshop, name ='pshop'),
    path('shop/order/',views.order, name ='order')
    
]
