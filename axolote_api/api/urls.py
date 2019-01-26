from django.urls import path
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from api.views import ServerViewSet, GroupViewSet, WorkViewSet, WorkTypeViewSet, BackupViewSet, AddressTypeViewSet, ParameterViewSet, EnvironmentViewSet

# Create a router and register our viewsets with it.
router_v1 = DefaultRouter()
router_v1.register(r'environments', EnvironmentViewSet, base_name='environments')
router_v1.register(r'groups', GroupViewSet, base_name='groups')
router_v1.register(r'servers', ServerViewSet, base_name='servers')
router_v1.register(r'works', WorkViewSet, base_name='works')
router_v1.register(r'works_types', WorkTypeViewSet, base_name='work_types')
router_v1.register(r'address_types', AddressTypeViewSet, base_name='address_types')
router_v1.register(r'backups', BackupViewSet, base_name='backups')
router_v1.register(r'parameters', ParameterViewSet, base_name='parameters')

#urlpatterns = [
#    path('', views.PostList.as_view()),
#    path('<int:pk>/', views.PostDetail.as_view()),
#]

urlpatterns = [
    url('', include(router_v1.urls))
]
