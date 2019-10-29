from django.db import models
from django.contrib.auth.models import User
from jsonfield import JSONField
import collections


# Create your models here.

class Shop(models.Model):
    name = models.CharField(max_length=20,default='')
    contact = models.IntegerField(default=0)
    

    def __str__(self):
        return self.name

class Item(models.Model):
    shop = models.ForeignKey(Shop,on_delete=models.CASCADE)
    name = models.CharField(max_length=20,default='')

    def __str__(self):
        return self.name

class Request(models.Model):
    
    # user = models.ForeignKey(User,on_delete=models.CASCADE)
    item = models.ForeignKey(Item,on_delete=models.CASCADE)
    address = models.CharField(max_length=2000,default='')
    date = models.DateField()
    time = models.TimeField()
    timestamp = models.DateTimeField(auto_now=True)

class Order(models.Model):
    
    # user = models.ForeignKey(User,on_delete=models.CASCADE)
    item = models.ForeignKey(Item,on_delete=models.CASCADE)
    address = models.CharField(max_length=2000,default='')
    date = models.DateField()
    time = models.TimeField()
    timestamp = models.DateTimeField(auto_now=True)
    
    
    
