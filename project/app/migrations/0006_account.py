# Generated by Django 4.2.3 on 2023-07-19 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0005_schedule_schedule_unique_migration_schedule"),
    ]

    operations = [
        migrations.CreateModel(
            name="Account",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("account_name", models.CharField(max_length=256, unique=True)),
                ("password", models.CharField(max_length=256)),
                (
                    "role",
                    models.CharField(
                        choices=[("tg", "Huong dan vien"), ("us", "Nguoi dung")],
                        default="Nguoi dung",
                        max_length=30,
                    ),
                ),
            ],
        ),
    ]
