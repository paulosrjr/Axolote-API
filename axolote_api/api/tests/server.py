from django.core.management import call_command
from django.test import TestCase
from model_mommy import mommy
from django.utils.timezone import datetime
from api.models import Server, Group, Environment


class TestServer(TestCase):
    fixtures = ['api/fixtures/group.yaml', 'api/fixtures/environment.yaml',]
    call_command('loaddata', 'api/fixtures/group.yaml', verbosity=0)
    call_command('loaddata', 'api/fixtures/environment.yaml', verbosity=0)
    def setUp(self):
        self.my_group = mommy.make(Group,
                                name='MyGroup',
                                deleted=False,
                                createddBy='Tester',
                                description='MyServer Test')
        self.my_environment = mommy.make(Environment,
                                name='TestEnv',
                                deleted=False,
                                createddBy='Tester',
                                description='My Test')
        self.my_server = mommy.make(Server,
                                 name='MyServer',
                                 address='myserver.corp',
                                 address_type='myserver.corp',
                                 environment='development',
                                 deleted=False,
                                 createddBy='Tester',
                                 description='MyServer Test',
                                 group_id=self.my_group,
                                 environment_id=self.my_environment)

    def test_record_creation(self):
        self.assertTrue(isinstance(self.my_server, Server))
        self.assertEquals(self.my_server.__str__(), self.my_server.name)
