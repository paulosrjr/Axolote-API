from django.db import models


class Environment(models.Model):

    class Meta:

        db_table = 'environment'

    name = models.CharField(max_length=256, blank=True, null=True)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256, blank=True, null=True)
    description = models.TextField(
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name
