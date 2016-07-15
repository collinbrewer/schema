# Schema
Schema uses plain JS objects to define arbitrary schemas, and provides a mechanism for walking abstract schema trees.

Schema works great on static schemas, but really shines when used with abstract, unpredictable schemas that contain nested formats, or unknown formats.

Schema provides a registry of Schema Classes registered to Schema Types, and a parser.

## Registering a Schema Type
```js
function CustomSchema(definition) {
   // do something with definition
}

Schema.register("custom-schema", CustomSchema);
```

A JS object that provides a `schemaType` key property defines how the schema is treated.

The following data:

```js
var data={
   "Todo" : [
      {
         id: 1234,
         title: "Hello World"
      }
   ],
   "User" : [
      {
         id: 4321,
         name: "Chris Ericson"
      }
   ]
};
```

Can be defined explicitly in Schema as:

```javascript
var schema={
   "schemaType": "db",
   "tables" : [
      {
         "schemaType" : "table",
         "name" : "Todo",
         "properties": [
            {
               "schemaType" : "field",
               "name" : "title",
               "type" : "string"
            }
         ]
      },
      {
         "schemaType" : "table",
         "name" : "User",
         "properties" : [
            {
               "schemaType" : "field",
               "name" : "id",
               "type" : "number"
            },
            {
               "schemaType" : "field",
               "name" : "name",
               "type" : "string"
            }
         ]
      }
   ]
}
```
