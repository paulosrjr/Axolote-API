from django.db import models


class Work(models.Model):

    class Meta:

        db_table = 'work'

    name = models.CharField(max_length=256, unique=True, db_index=True)
    origin_path = models.TextField(
        blank=True,
        null=True
    )
    destination_path = models.TextField(
        blank=True,
        null=True
    )
    command = models.CharField(max_length=256, blank=True, null=True)
    retention = models.CharField(max_length=256, blank=True, null=True)
    schedule = models.CharField(max_length=256, blank=True, null=True)
    parameters = models.CharField(max_length=256, blank=True, null=True)
    deleted = models.BooleanField()
    createddBy = models.CharField(max_length=256, blank=True, null=True)
    description = models.TextField(
        blank=True,
        null=True
    )
    work_type_id = models.ForeignKey(
        'WorkType',
        on_delete=models.PROTECT,
        default=1
    )
    environment_id = models.ForeignKey(
        'Environment',
        on_delete=models.PROTECT,
        default=1
    )
    group_id = models.ForeignKey(
        'Group',
        on_delete=models.PROTECT,
        default=1
    )
    server_id = models.ForeignKey(
        'Server',
        on_delete=models.PROTECT,
        default=1
    )

    def __str__(self):
        return self.name
