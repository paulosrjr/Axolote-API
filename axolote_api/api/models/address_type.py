from django.db import models


class AddressType(models.Model):

    class Meta:

        db_table = 'address_type'

    name = models.CharField(max_length=256)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return self.name
