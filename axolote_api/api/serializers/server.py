from rest_framework import serializers
from api.models import Server, Group


#class ServerSerializer(serializers.HyperlinkedModelSerializer):
class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ('id', 'name', 'address', 'address_type', 'environment', 'deleted', 'createddBy', 'description', 'group')
