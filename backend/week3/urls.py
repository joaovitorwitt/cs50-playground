from django.urls import path, include
from . import views

urlpatterns = [
    path("plurality", views.plurality, name="plurality")
]