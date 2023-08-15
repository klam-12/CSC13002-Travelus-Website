from django.urls import path
from .views import RegisterView, LoginView,ProfileView

app_name = 'users'

urlpatterns = [
   # path('register/', CustomUserCreate.as_view(), name='creatre_user')
    path('register/', RegisterView.as_view(), name='register'),
    path('signin/', LoginView.as_view(), name='signin'),
    path('profile/<str:username>/', ProfileView.as_view(), name='profile'),
    path('logout/', ProfileView.as_view(), name='logout'),
]
