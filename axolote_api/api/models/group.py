from django.db import models


class Group(models.Model):

    class Meta:

        db_table = 'group'

    name = models.CharField(max_length=256)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return self.name
