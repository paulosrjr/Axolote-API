from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from api.serializers import BackupSerializer
from api.models import Backup


class BackupViewSet(viewsets.ViewSet):
    """
    API endpoint that allows backups to be viewed or created.
    """
    def list(self, request):
        queryset = Backup.objects.all()
        serializer = BackupSerializer(queryset, many=True)
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
