/**
 * Arm API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ArmApi);
  }
}(this, function(expect, ArmApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ArmApi.VpnDefinition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VpnDefinition', function() {
    it('should create an instance of VpnDefinition', function() {
      // uncomment below and update the code to test VpnDefinition
      //var instance = new ArmApi.VpnDefinition();
      //expect(instance).to.be.a(ArmApi.VpnDefinition);
    });

    it('should have the property proxy (base name: "proxy")', function() {
      // uncomment below and update the code to test the property proxy
      //var instance = new ArmApi.VpnDefinition();
      //expect(instance).to.be();
    });

    it('should have the property listeners (base name: "listeners")', function() {
      // uncomment below and update the code to test the property listeners
      //var instance = new ArmApi.VpnDefinition();
      //expect(instance).to.be();
    });

  });

}));
