"""axolote_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from api.views import ServerViewSet, GroupViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'servers', ServerViewSet, base_name='servers')
router.register(r'groups', GroupViewSet, base_name='groups')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    url(r'^api/v1/', include(router.urls))
]
#urlpatterns = [
#    path('admin/', admin.site.urls),
#    url(r'^api/v1/servers/$', ServerViewSet.as_view({'get': 'list'}), name='server-list'),
#    url(r'^api/v1/servers/(?P<pk>[0-9]+)/$', ServerViewSet.as_view({'get': 'retrieve'}), name='server-retrieve'),
#    url(r'^api/v1/groups/$', GroupViewSet.as_view({'get': 'list'}), name='group-list'),
#]
