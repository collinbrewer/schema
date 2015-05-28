var should=require("chai").should();
var Schema=require("../src/schema-types/property-schema.js");

describe("Constructor", function(){

   it("should create a new property schema", function(){

      var definition={
         "schemaType" : "property",
         "name" : "title",
         "type" : "string"
      };

      var schema=new Schema(definition);

      should.exist(schema);
   });
});
