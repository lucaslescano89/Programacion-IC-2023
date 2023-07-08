from django.db import models
from django.utils import timezone

# Create your models here.

class Alumno(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    dni = models.CharField(max_length=10, null=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Reserva(models.Model):
    date = models.DateField(default=timezone.now, null=True)
    alumno = models.ForeignKey('Alumno', on_delete=models.CASCADE, null=True)
    laboratorio = models.CharField(max_length=20, null=True)
    herramienta = models.CharField(max_length=100, null=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return f"Reserva de {self.alumno} para el día {self.date}"

