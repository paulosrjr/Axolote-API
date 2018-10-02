from django.test import TestCase
from model_mommy import mommy
from django.utils.timezone import datetime
from api.models import Server, Group


class TestGroup(TestCase):

    def setUp(self):
        self.group = mommy.make(Group,
                                 name='MyGroup',
                                 deleted=False,
                                 createddBy='Tester',
                                 description='MyServer Test')

    def test_record_creation(self):
        self.assertTrue(isinstance(self.group, Group))
        self.assertEquals(self.group.__str__(), self.group.name)
