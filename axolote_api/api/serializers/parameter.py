from rest_framework import serializers
from api.models import Server, Group


#class GroupSerializer(serializers.HyperlinkedModelSerializer):
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'
