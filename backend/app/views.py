from django.shortcuts import render
from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer


# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.filter(added_by__username='chris')
    serializer_class = ContactSerializer

    def create(self, request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            savedContact = serializer.save()
