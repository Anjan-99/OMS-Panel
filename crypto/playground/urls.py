from django.urls import path
from . import views
from django.urls import include

urlpatterns = [ 
    path('',views.index,name="hello"),
    path('close_position/', views.close_position, name="close_position"),
]