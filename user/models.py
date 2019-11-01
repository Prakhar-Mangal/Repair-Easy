from django.db import models
from django.contrib.auth.models import User
from jsonfield import JSONField
import collections


# Create your models here.

class Shop(models.Model):
    name = models.CharField(max_length=20,default='')
    contact = models.IntegerField(default=0)
    image = models.FileField(upload_to='shop/images',default='')
    

    def __str__(self):
        return self.name

class Item(models.Model):
    shop = models.ForeignKey(Shop,on_delete=models.CASCADE)
    name = models.CharField(max_length=20,default='')
    image = models.FileField(upload_to='item/images',default='')

    def __str__(self):
        return self.name

class Request(models.Model):   
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    item = models.ForeignKey(Item,on_delete=models.CASCADE)
    address = models.CharField(max_length=2000,default='')
    status = models.IntegerField(default=0)
    disapprove = models.CharField(max_length=100,blank=True)
    date = models.DateField()
    time = models.TimeField()
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.first_name

    

# status :-
# 0 - request generated
# 1 - approved
# -1 - disapproved
    
    
