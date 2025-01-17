const utils       = require('./utils');

function createSensorEntity(control, name, room, func, _obj, forcedEntityId, stateName = 'ACTUAL') {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    entity.context.STATE = {getId: null};
    const state = control.states.find(s => s.id && s.name === stateName);
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }
    return entity;
}

exports.processMotion = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:motion-sensor';
    entity.attributes.device_class = 'motion';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

exports.processDoor = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:door';
    entity.attributes.device_class = 'door';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

exports.processWindow = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:window-maximize';
    entity.attributes.device_class = 'window';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

exports.processBattery = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'LOWBAT');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'LOWBAT';
        entity.attributes.device_class = 'battery';
        utils.addID2entity(state.id, entity);
        return entity;
    } else {
        return null;
    }
};

function createOnlineIndicatorFromOfflineIndicator(entity) {
    entity.attributes.device_class = 'connectivity';
    //need to invert state from offline to online in HASS:
    entity.context.STATE.getParser = (entity, attr, state) => {
        state = state || {val: null};
        entity.state = state.val ? 'off' : 'on';
    };
    entity.context.STATE.historyParser = (id, val) => {
        return val ? 'off' : 'on';
    };
}

exports.connectivityIndicator = function (control, name, room, func, objects, forcedEntityId) {
    let state = control.states.find(s => s.id && (s.name === 'UNREACH' || s.name === 'OFFLINE'));
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'OFFLINE';
        createOnlineIndicatorFromOfflineIndicator(entity);
        utils.addID2entity(state.id, entity);
        return entity;
    }

    state = control.states.find(s => s.id && s.name === 'CONNECTED');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'CONNECTED';
        entity.attributes.device_class = 'connectivity';
        utils.addID2entity(state.id, entity);
        return entity;
    }
    return null;
};

exports.processError = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'ERROR');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'ERROR';
        entity.attributes.device_class = 'problem';
        return entity;
    }
    return null;
};

exports.processMaintenance = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'MAINTAIN');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'MAINTAIN';
        entity.attributes.device_class = 'update';
        return entity;
    }
    return null;
};

exports.processWorking = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'WORKING');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'WORKING';
        entity.attributes.device_class = 'running';
        return entity;
    }
    return null;
};

exports.processFireAlarm = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = createSensorEntity(control, name, room, func, _obj, forcedEntityId);
    entity.attributes.device_class = 'smoke';
    return [entity];
};

/**
 * Create manual binary_sensor entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>}
 */
exports.processManualEntity = async function(id, obj, entity, objects, custom) {
    entity.attributes.device_class = custom.attr_device_class;
    if (custom.attr_device_class === 'connectivity' && obj.common.role === 'indicator.unreach') {
        createOnlineIndicatorFromOfflineIndicator(entity);
    }
    return [entity];
};
