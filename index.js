// dependencies
var PropertySchema=require("./src/schema-types/property-schema.js");
var EntitySchema=require("./src/schema-types/entity-schema.js");
var StoreSchema=require("./src/schema-types/store-schema.js");
var Schema=require("./src/schema.js");

// register defaults
Schema.register("property", PropertySchema);
Schema.register("entity", EntitySchema);
Schema.register("store", StoreSchema);

// export
(typeof(module)!=="undefined" ? (module.exports=Schema) : ((typeof(define)!=="undefined" && define.amd) ? define(function(){ return Schema; }) : (window.Schema=Schema)));
