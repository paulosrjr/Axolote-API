from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from api.serializers import EnvironmentSerializer
from api.models import Environment


class EnvironmentViewSet(viewsets.ViewSet):
    """
    API endpoint that allows environments to be viewed or edited.
    """
    def list(self, request):
        queryset = Environment.objects.all()
        serializer = EnvironmentSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
