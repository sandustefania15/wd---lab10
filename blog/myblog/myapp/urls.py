from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('form/', views.form, name='form'),
    path('gallery/', views.gallery, name='gallery'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
]
