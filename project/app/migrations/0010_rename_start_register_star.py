# Generated by Django 4.2.3 on 2023-07-19 15:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0009_alter_register_start"),
    ]

    operations = [
        migrations.RenameField(
            model_name="register",
            old_name="start",
            new_name="star",
        ),
    ]
