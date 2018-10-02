from django.db import models


class Backup(models.Model):

    class Meta:

        db_table = 'backup'

    name = models.CharField(max_length=256)
    environment = models.CharField(max_length=256)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256)
    description = models.TextField()
    path = models.TextField()
    status = models.CharField(max_length=256)
    time = models.TimeField()
    data = models.DateField()
    date_and_time = models.DateTimeField()
    group_id = models.ForeignKey(
        'Group',
        on_delete=models.PROTECT,
    )
    work_id = models.ForeignKey(
        'Work',
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.name
