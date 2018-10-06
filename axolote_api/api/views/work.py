from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from api.serializers import WorkSerializer
from api.models import Work


class WorkViewSet(viewsets.ViewSet):
    """
    API endpoint that allows works to be viewed or edited.
    """
    def list(self, request):
        queryset = Work.objects.all()
        serializer = WorkSerializer(queryset, many=True)
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
