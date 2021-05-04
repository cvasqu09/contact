from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    number_of_contacts = models.IntegerField(default=0)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True)