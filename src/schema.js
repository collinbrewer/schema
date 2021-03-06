/**
 * Schema.js
 * A library for describing, manipulating and querying schemas
 */

var registeredByType = {};

function Schema (definition, inferred) {
	this.definition = definition;

	var schemaType = definition.schemaType || inferred;

	var SchemaClass = registeredByType[schemaType];

	return new SchemaClass(definition);
}

Schema.register = function (type, schemaClass) {
	registeredByType[type] = schemaClass;
};

var infer = function (data) {
	var schema = {};

	console.warn('Not yet implemented');

	// var inferredType;

	if (typeof (data) === 'object') {
		if (data.constructor === Array) {
			schema.type = 'array';
		}
		else {
			schema.type = 'object';

			// var value;
			//
			// for (var key in data)
			// {
			// 	value = data[key];
			// }
		}
	}

	return schema;
};

Schema.infer = infer;

module.exports = Schema;
