from django.urls import path, include
from . import views

"""
readability
bulbs
caesar
substitution
wordle50
"""

urlpatterns = [
    path('readability', views.readability, name="readability"),
    path('bulbs', views.bulbs, name="bulbs"),
]