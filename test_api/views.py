from rest_framework import viewsets
from .serializers import AlumnoSerializer, ReservaSerializer
from .models import Alumno, Reserva

# Create your views here.
class AlumnoViewSet(viewsets.ModelViewSet):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()

class ReservaViewSet(viewsets.ModelViewSet):
    serializer_class = ReservaSerializer
    queryset = Reserva.objects.all()
    
