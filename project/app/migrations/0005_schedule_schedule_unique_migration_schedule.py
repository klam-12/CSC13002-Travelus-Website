# Generated by Django 4.2.3 on 2023-07-19 14:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0004_tourstartdate_picture_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Schedule",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("date", models.DateField(null=True)),
                ("activity", models.CharField(max_length=500, null=True)),
                (
                    "location_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="schedule_locationid",
                        to="app.location",
                    ),
                ),
                (
                    "tour_startdate_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="schedule_tourstartdateid",
                        to="app.tourstartdate",
                    ),
                ),
            ],
        ),
        migrations.AddConstraint(
            model_name="schedule",
            constraint=models.UniqueConstraint(
                fields=("tour_startdate_id", "date"), name="unique_migration_schedule"
            ),
        ),
    ]
