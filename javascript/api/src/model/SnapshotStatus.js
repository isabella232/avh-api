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
 * The SnapshotStatus model module.
 * @module model/SnapshotStatus
 * @version 1.0.0
 */
class SnapshotStatus {
    /**
     * Constructs a new <code>SnapshotStatus</code>.
     * @alias module:model/SnapshotStatus
     */
    constructor() { 
        
        SnapshotStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnapshotStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotStatus} obj Optional instance to populate.
     * @return {module:model/SnapshotStatus} The populated <code>SnapshotStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnapshotStatus();

            if (data.hasOwnProperty('task')) {
                obj['task'] = ApiClient.convertToType(data['task'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} task
 */
SnapshotStatus.prototype['task'] = undefined;

/**
 * @member {Boolean} created
 */
SnapshotStatus.prototype['created'] = undefined;






export default SnapshotStatus;

