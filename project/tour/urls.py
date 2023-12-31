from django.contrib import admin
from django.urls import path, include
from .views import *
from tour import views
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView
urlpatterns = [
    path('', TemplateView.as_view(template_name="app/index.html")),
    path('detailTour',TourView.as_view()),
    path('tourStart',TourStartDateView.as_view()),
    path('vehicle',VehicleView.as_view()),
    path('location',LocationView.as_view()),
    path('schedule',ScheduleView.as_view()),
    path('recommend', views.recommend_view),
    path('search',views.search_tour_view),
    path('detail/<str:id>/',views.detail_tour_view),
    path('comment/<str:id>/',views.commend_view),
    path('alltour',views.alltour_view),
    path('listCustomer/<str:tour_startdate_id>',views.listCustomer_view),
    path('detail/<str:id>/payment',views.booking_view),
    path('bookinglist/',views.list_tour_of_user),
    path('dashboard/',DashBoard.as_view())
]   