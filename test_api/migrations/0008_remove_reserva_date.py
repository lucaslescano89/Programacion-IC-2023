# Generated by Django 4.1 on 2023-06-30 19:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('test_api', '0007_alter_reserva_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reserva',
            name='date',
        ),
    ]
