from django.db import models


class Server(models.Model):

    class Meta:

        db_table = 'server'

    name = models.CharField(max_length=256)
    address = models.CharField(max_length=256)
    address_type = models.CharField(max_length=256)
    environment = models.CharField(max_length=256)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256)
    description = models.TextField()
    group = models.ForeignKey(
        'Group',
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.name
