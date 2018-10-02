from django.test import TestCase
from model_mommy import mommy
from django.utils.timezone import datetime
from api.models import Server, Group


class TestServer(TestCase):

    def setUp(self):
        self.group = mommy.make(Group,
                                name='MyGroup',
                                deleted=False,
                                createddBy='Tester',
                                description='MyServer Test')
        self.server = mommy.make(Server,
                                 name='MyServer',
                                 address='myserver.corp',
                                 address_type='myserver.corp',
                                 environment='development',
                                 deleted=False,
                                 createddBy='Tester',
                                 description='MyServer Test',
                                 group=self.group)

    def test_record_creation(self):
        self.assertTrue(isinstance(self.server, Server))
        self.assertEquals(self.server.__str__(), self.server.name)
