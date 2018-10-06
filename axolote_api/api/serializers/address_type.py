from rest_framework import serializers
from api.models import AddressType


class AddressTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddressType
        fields = '__all__'
