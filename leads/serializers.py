from rest_framework import serializers
from .models import Lead

# We are turning the model into a seralizer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        # Choose which type of model are we going to use
        model = Lead

        # We are going to take all the fields of the model this way
        fields = '__all__'
        # fields = ('name', 'email') If we just wanted just a couple of 
        