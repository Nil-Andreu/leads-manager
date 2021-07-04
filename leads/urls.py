from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()

# We are going to register our routes
router.register('api/leads/', LeadViewSet, 'leads') # Our endpoint is going to be api/leads. The viewser is the LeadViewSEt, and the name we will refer to it is 'leads

# 
urlpatterns = router.urls