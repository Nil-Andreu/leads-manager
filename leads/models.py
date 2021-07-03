from django.db import models

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    message = models.CharField(max_length = 500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True) # To add the date automatically
