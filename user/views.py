from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from .models import Shop, Item, Request

# Create your views here.
def home(request):
    return render(request,'user/login.html')

def register(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        contact = request.POST.get('contact')
        password = request.POST.get('pass')
        print(name,contact,password)
        if User.objects.filter(username=contact).exists():
                # messages.info(request,'contact already exist')
                return redirect('/register')
        else:
            user = User.objects.create_user(username=contact, password = password, first_name = name, last_name = password)
            user.save()
            print('user created')
            user = auth.authenticate(username=contact,password=password)
            if user is not None:
                auth.login(request,user)
                return redirect('shop')
            else:
                return redirect('seller')
            return redirect('register')
    return render(request,'user/register.html')

def login(request):
    if request.method == 'POST':
        contact = request.POST.get('contact')
        password = request.POST.get('pass')
        print(contact,password)
        user = auth.authenticate(username=contact, password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('shop')
        else:
            return redirect('home')
    else:
        return redirect('home')

def shop(request):
    if not request.user.is_authenticated:
        return redirect('home')
    else:
        shops = Shop.objects.all()
        context = { 'shops':shops }
        print(shops)
        return render(request,'user/shop.html', context)

def pshop(request, shop_id):
    if not request.user.is_authenticated:
        return redirect('home')
    else:
        print(shop_id)
        items = Item.objects.filter(shop=shop_id)
        print(items)
        context = { 'items':items }
        return render(request,'user/pshop.html', context)    # category = Category.objects.get(id=cat_id)

def order(request):
    if request.method == 'POST':
        u = request.POST.get('user')        
        i = request.POST.get('item')
        add = request.POST.get('add')
        date = request.POST.get('date')
        time = request.POST.get('time')
        item = Item.objects.get(id=i)
        user = User.objects.get(id=u)
        order = Request(user=user,item=item, address=add, date=date, time=time)
        order.save()
        print('saved')
        return HttpResponse(str(add+date+time))

def dashboard(request):
    return render(request,'user/dashboard.html')


def logout(request):
    auth.logout(request)
    return redirect('home')
