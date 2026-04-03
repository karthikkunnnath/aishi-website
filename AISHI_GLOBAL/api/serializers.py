from rest_framework import serializers
from .models import TechnicalEnquiry

class EnquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = TechnicalEnquiry
        fields = "__all__"