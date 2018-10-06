from django.db import models


class Parameter(models.Model):

    class Meta:

        db_table = 'parameter'

    name = models.CharField(max_length=256)
    address = models.CharField(max_length=256)
    address_type = models.CharField(max_length=256)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256)
    description = models.TextField()
    group = models.ForeignKey(
        'Group',
        on_delete=models.PROTECT,
    )
    environment = models.ForeignKey(
        'Environment',
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.name
