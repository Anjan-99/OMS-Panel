from django.urls import path
from . import views
from django.urls import include

urlpatterns = [ 
    path('',views.index,name="hello"),
    path('close_position/', views.close_position, name="close_position"),
    path("b_e_position/", views.b_e_pos, name="b_e_position"),
    path("modify_sl/", views.modify_sl, name="modify_sl"),
]