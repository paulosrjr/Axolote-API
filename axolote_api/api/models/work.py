from django.db import models


class Work(models.Model):

    class Meta:

        db_table = 'work'

    name = models.CharField(max_length=256)
    origin_path = models.TextField()
    destination_path = models.TextField()
    command = models.CharField(max_length=256)
    retention = models.CharField(max_length=256)
    schedule = models.CharField(max_length=256)
    parameters = models.CharField(max_length=256)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256)
    description = models.TextField()
    environment = models.ForeignKey(
        'Environment',
        on_delete=models.PROTECT,
    )
    group = models.ForeignKey(
        'Group',
        on_delete=models.PROTECT,
    )
    server = models.ForeignKey(
        'Server',
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.name
