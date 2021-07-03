from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Going to create the viewset
class LeadViewSet(viewsets.ModelViewSet):
    # The query that graps all the leads
    queryset = Lead.objects.all()

    # For the moment, all the users can access
    permission_classes = [
        permissions.AllowAny
    ]

    # We specify the serializer we are going to use
    serializer_class = LeadSerializer
