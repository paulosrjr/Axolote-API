from django.db import models
from datetime import datetime

class Backup(models.Model):

    class Meta:

        db_table = 'backup'

    name = models.CharField(max_length=256, blank=True, null=True)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256, blank=True, null=True)
    description = models.TextField(
        blank=True,
        null=True
    )
    path = models.TextField(
        blank=True,
        null=True
    )
    status = models.CharField(max_length=256, blank=True, null=True)
    time = models.TimeField(auto_now=True)
    data = models.DateField(auto_now=True)
    date_and_time = models.DateTimeField(auto_now=True)
    group_id = models.ForeignKey(
        'Group',
        on_delete=models.PROTECT,
        #blank=True,
        #null=True
        default=1
    )
    work_id = models.ForeignKey(
        'Work',
        on_delete=models.PROTECT,
        default=1
    )
    environment_id = models.ForeignKey(
        'Environment',
        on_delete=models.PROTECT,
        default=1
    )

    def __str__(self):
        return self.name
