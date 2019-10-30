from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('register/',views.register,name='register'),
     path('login/',views.login,name='login'),
    path('shop/',views.shop,name='shop'),
    path('shop/pshop/<shop_id>',views.pshop, name ='pshop'),
    path('shop/order/',views.order, name ='order'),
    path('dashboard/',views.dashboard, name ='dashboard'),
    path('logout/',views.logout,name='logout')
    
]
