from django.contrib import admin
from .models import Shop, Item, Request, Order
# Register your models here.
admin.site.register(Shop)
admin.site.register(Item)
admin.site.register(Request)
admin.site.register(Order)
