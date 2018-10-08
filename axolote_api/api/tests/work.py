from django.test import TestCase
from model_mommy import mommy
from django.utils.timezone import datetime
from api.models import Server, Group, Environment, Work, WorkType


class TestWork(TestCase):

    def setUp(self):
        self.group = mommy.make(Group,
                                name='MyGroup',
                                deleted=False,
                                createddBy='Tester',
                                description='MyServer Test')
        self.environment = mommy.make(Environment,
                                name='TestEnv',
                                deleted=False,
                                createddBy='Tester',
                                description='My Test')
        self.work_type = mommy.make(WorkType,
                                name='TaskSCP',
                                command='SCP',
                                task='actions.backup_executors.scp',
                                deleted=False,
                                createddBy='Tester',
                                description='My Test')
        self.server = mommy.make(Server,
                                 name='MyServer',
                                 address='myserver.corp',
                                 address_type='myserver.corp',
                                 environment='development',
                                 deleted=False,
                                 createddBy='Tester',
                                 description='MyServer Test',
                                 group_id=self.group,
                                 environment_id=self.environment)
        self.work = mommy.make(Work,
                               name="MyBackupWork",
                               origin_path="/tmp/data",
                               destination_path="/tmp/backup",
                               command="SCP",
                               retention="7",
                               schedule="* * * 7 * *",
                               parameters="-r",
                               deleted=False,
                               createddBy="Tester",
                               description="MyBackupWork",
                               work_type_id=self.work_type,
                               environment_id=self.environment,
                               group_id=self.group,
                               server_id=self.server)

    def test_record_creation(self):
        self.assertTrue(isinstance(self.work, Work))
        self.assertEquals(self.work.__str__(), self.work.name)
