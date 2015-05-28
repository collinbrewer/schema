var should=require("chai").should();
var EntitySchema=require("../src/schema-types/entity-schema.js");

describe("Constructor", function(){

   it("should create a new entity schema", function(){

      var definition={
         "schemaType" : "entity",
         "name" : "Todo",
         "properties" : [
            {
               "schemaType" : "property",
               "name" : "title",
               "type" : "string"

            }
         ]
      };

      var schema=new EntitySchema(definition);

      should.exist(schema);
   });
});


describe("Querying", function(){

   var definition={
      "schemaType" : "entity",
      "name" : "Person",
      "properties" : [
         {
            "schemaType" : "property",
            "name" : "firstName",
            "type" : "string",
            "required" : true
         },
         {
            "schemaType" : "property",
            "name" : "lastName",
            "type" : "string"
         },
         {
            "schemaType" : "property",
            "name" : "employer",
            "type" : "relationship",
            "entityName" : "Business"
         },
         {
            "name" : "accounts",
            "type" : "fetched",
            "entityName" : "Account",
            "predicate" : "user==$FETCH_SOURCE"
         }
      ]
   };

   var schema=new EntitySchema(definition);

   it("should return attribute properties", function(){

      var properties=schema.getAttributesByName();

      properties.should.have.property("firstName");
   });

   it("should return relationship properties", function(){

      var properties=schema.getRelationshipsByName();

      properties.should.have.property("employer");
   });

   it("should return fetched properties", function(){

      var properties=schema.getFetchedByName();

      properties.should.have.property("accounts");
   });

   it("should return required properties", function(){

      var properties=schema.getRequiredByName();

      properties.should.have.property("firstName");
   });
});
