# Generated by Django 2.2.6 on 2019-10-22 13:02

from django.db import migrations
import django.utils.timezone
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='json',
            field=jsonfield.fields.JSONField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
