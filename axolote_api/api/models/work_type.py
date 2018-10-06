from django.db import models


class WorkType(models.Model):

    class Meta:

        db_table = 'work_type'

    name = models.CharField(max_length=256)
    command = models.TextField()
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256)
    description = models.TextField()

    def __str__(self):
        return self.name
