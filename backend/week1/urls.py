from django.urls import path, include
from . import views

urlpatterns = [
    path('mario-less', views.mario_less, name="mario-less"),
    path('mario-more', views.mario_more, name="mario-more"),
    path("cash", views.cash, name="cash"),
    path("credit", views.credit, name="credit")
]