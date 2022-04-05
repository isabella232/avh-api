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
import Firmware from './Firmware';

/**
 * The ModelSoftware model module.
 * @module model/ModelSoftware
 * @version 1.0.0
 */
class ModelSoftware {
    /**
     * Constructs a new <code>ModelSoftware</code>.
     * @alias module:model/ModelSoftware
     */
    constructor() { 
        
        ModelSoftware.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelSoftware</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelSoftware} obj Optional instance to populate.
     * @return {module:model/ModelSoftware} The populated <code>ModelSoftware</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelSoftware();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('boardConfig')) {
                obj['boardConfig'] = ApiClient.convertToType(data['boardConfig'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('cpid')) {
                obj['cpid'] = ApiClient.convertToType(data['cpid'], 'Number');
            }
            if (data.hasOwnProperty('bdid')) {
                obj['bdid'] = ApiClient.convertToType(data['bdid'], 'Number');
            }
            if (data.hasOwnProperty('firmwares')) {
                obj['firmwares'] = ApiClient.convertToType(data['firmwares'], [Firmware]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ModelSoftware.prototype['name'] = undefined;

/**
 * @member {String} boardConfig
 */
ModelSoftware.prototype['boardConfig'] = undefined;

/**
 * @member {String} platform
 */
ModelSoftware.prototype['platform'] = undefined;

/**
 * @member {Number} cpid
 */
ModelSoftware.prototype['cpid'] = undefined;

/**
 * @member {Number} bdid
 */
ModelSoftware.prototype['bdid'] = undefined;

/**
 * @member {Array.<module:model/Firmware>} firmwares
 */
ModelSoftware.prototype['firmwares'] = undefined;






export default ModelSoftware;

