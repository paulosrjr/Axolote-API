from django.db import models


class Group(models.Model):

    class Meta:

        db_table = 'group'

    name = models.CharField(max_length=256, blank=True, null=True)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256, blank=True, null=True)
    description = models.TextField(
        blank=True,
        null=True
    )
    environment_id = models.ForeignKey(
        'Environment',
        on_delete=models.PROTECT,
        default=1
    )
    
    def __str__(self):
        return self.name
