"""
    Arm API

    REST API to manage your virtual devices.  # noqa: E501

    The version of the OpenAPI document: 1
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import ApiClient
from ApiClient.model.instance_boot_options import InstanceBootOptions
from ApiClient.model.model import Model
from ApiClient.model.volume_options import VolumeOptions
globals()['InstanceBootOptions'] = InstanceBootOptions
globals()['Model'] = Model
globals()['VolumeOptions'] = VolumeOptions
from ApiClient.model.instance_create_options import InstanceCreateOptions


class TestInstanceCreateOptions(unittest.TestCase):
    """InstanceCreateOptions unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testInstanceCreateOptions(self):
        """Test InstanceCreateOptions"""
        # FIXME: construct object with mandatory attributes with example values
        # model = InstanceCreateOptions()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()