from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import date
from .models import Employee, Attendance
from .serializers import EmployeeSerializer, AttendanceSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

@api_view(['GET'])
def dashboard_stats(request):
    today = date.today()

    total_employees = Employee.objects.count()
    present_today = Attendance.objects.filter(
        date=today,
        status="Present"
    ).count()

    absent_today = total_employees - present_today

    return Response({
        "total_employees": total_employees,
        "present_today": present_today,
        "absent_today": absent_today
    })
