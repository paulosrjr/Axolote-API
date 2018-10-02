from django.shortcuts import render
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from api.serializers import ServerSerializer
from api.models import Server


class ServerViewSet(viewsets.ViewSet):
    """
    API endpoint that allows servers to be viewed or edited.
    """
    def list(self, request):
        queryset = Server.objects.all()
        serializer = ServerSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        queryset = Server.objects.all()
        server = get_object_or_404(queryset, pk=pk)
        serializer = ServerSerializer(server)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass