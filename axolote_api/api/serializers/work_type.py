from rest_framework import serializers
from api.models import WorkType


class WorkTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkType
        fields = '__all__'
