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

import ApiClient from '../ApiClient';

/**
 * The ApiNotFoundError model module.
 * @module model/ApiNotFoundError
 * @version 1.0.0
 */
class ApiNotFoundError {
    /**
     * Constructs a new <code>ApiNotFoundError</code>.
     * @alias module:model/ApiNotFoundError
     * @param error {String} Error text
     * @param errorID {String} Error ID
     */
    constructor(error, errorID) { 
        
        ApiNotFoundError.initialize(this, error, errorID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error, errorID) { 
        obj['error'] = error;
        obj['errorID'] = errorID;
    }

    /**
     * Constructs a <code>ApiNotFoundError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiNotFoundError} obj Optional instance to populate.
     * @return {module:model/ApiNotFoundError} The populated <code>ApiNotFoundError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiNotFoundError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('errorID')) {
                obj['errorID'] = ApiClient.convertToType(data['errorID'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], Object);
            }
        }
        return obj;
    }


}

/**
 * Error text
 * @member {String} error
 */
ApiNotFoundError.prototype['error'] = undefined;

/**
 * Error ID
 * @member {String} errorID
 */
ApiNotFoundError.prototype['errorID'] = undefined;

/**
 * Name of the object requested
 * @member {String} name
 */
ApiNotFoundError.prototype['name'] = undefined;

/**
 * params provided by user
 * @member {Object} params
 */
ApiNotFoundError.prototype['params'] = undefined;






export default ApiNotFoundError;

