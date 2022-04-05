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
    instance = new ArmApi.ApiToken();
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

  describe('ApiToken', function() {
    it('should create an instance of ApiToken', function() {
      // uncomment below and update the code to test ApiToken
      //var instance = new ArmApi.ApiToken();
      //expect(instance).to.be.a(ArmApi.ApiToken);
    });

    it('should have the property apiToken (base name: "apiToken")', function() {
      // uncomment below and update the code to test the property apiToken
      //var instance = new ArmApi.ApiToken();
      //expect(instance).to.be();
    });

  });

}));
