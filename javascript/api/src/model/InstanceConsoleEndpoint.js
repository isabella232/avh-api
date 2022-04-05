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
 * The InstanceConsoleEndpoint model module.
 * @module model/InstanceConsoleEndpoint
 * @version 1.0.0
 */
class InstanceConsoleEndpoint {
    /**
     * Constructs a new <code>InstanceConsoleEndpoint</code>.
     * @alias module:model/InstanceConsoleEndpoint
     */
    constructor() { 
        
        InstanceConsoleEndpoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceConsoleEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceConsoleEndpoint} obj Optional instance to populate.
     * @return {module:model/InstanceConsoleEndpoint} The populated <code>InstanceConsoleEndpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceConsoleEndpoint();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Console Websocket URL
 * @member {String} url
 */
InstanceConsoleEndpoint.prototype['url'] = undefined;






export default InstanceConsoleEndpoint;

