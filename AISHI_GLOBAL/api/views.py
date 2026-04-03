from rest_framework import viewsets
from .models import TechnicalEnquiry
from .serializers import EnquirySerializer


class EnquiryViewSet(viewsets.ModelViewSet):

    queryset = TechnicalEnquiry.objects.all()
    serializer_class = EnquirySerializer