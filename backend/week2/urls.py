from django.urls import path, include
from . import views

"""
wordle50
"""

urlpatterns = [
    path('readability', views.readability, name="readability"),
    path('bulbs', views.bulbs, name="bulbs"),
    path('caesar', views.caesar, name="caesar"),
    path('substitution', views.substitution, name="substitution")
]