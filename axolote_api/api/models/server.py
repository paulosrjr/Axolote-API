from django.db import models


class Server(models.Model):

    class Meta:

        db_table = 'server'

    name = models.CharField(max_length=256, blank=True, null=True)
    address = models.CharField(max_length=256, blank=True, null=True)
    address_type = models.CharField(max_length=256, blank=True, null=True)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256, blank=True, null=True)
    description = models.TextField()
    group_id = models.ForeignKey(
        'Group',
        on_delete=models.PROTECT,
        blank=True,
        null=True
    )
    environment_id = models.ForeignKey(
        'Environment',
        on_delete=models.PROTECT,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name
