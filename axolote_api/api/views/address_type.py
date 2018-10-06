from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from api.serializers import AddressTypeSerializer
from api.models import AddressType


class AddressTypeSet(viewsets.ViewSet):
    """
    API endpoint that allows addresstype to be viewed.
    """
    def list(self, request):
        queryset = AddressType.objects.all()
        serializer = AddressTypeSerializer(queryset, many=True)
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
