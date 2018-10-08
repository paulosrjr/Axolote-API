from django.db import models


class WorkType(models.Model):

    class Meta:

        db_table = 'work_type'

    name = models.CharField(max_length=256, db_index=True)
    command = models.TextField(
        blank=True,
        null=True
    )
    task = models.TextField(
        blank=True,
        null=True
    )
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256, blank=True, null=True)
    description = models.TextField(
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name
