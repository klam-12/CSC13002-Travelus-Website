# Generated by Django 4.2.3 on 2023-07-19 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0002_location_vehicel_tour"),
    ]

    operations = [
        migrations.AddField(
            model_name="tour",
            name="tag",
            field=models.CharField(
                choices=[
                    ("s", "Sap dien ra"),
                    ("d", "Dang dien ra"),
                    ("k", "Da ket thuc"),
                ],
                default="Sap dien ra",
                max_length=30,
            ),
        ),
    ]