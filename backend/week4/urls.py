from django.urls import path, include
from . import views

urlpatterns = [
    path("volume", views.volume, name="volume")
]