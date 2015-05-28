var should=require("chai").should();
var Schema=require("../src/schema-types/store-schema.js");

describe("Constructor", function(){

   it("should create a new store schema", function(){

      var definition={
         "schemaType" : "store",
         "entities" : [
            {
               "schemaType" : "entity",
               "name" : "Todo",
               "properties" : [
                  {
                     "schemaType" : "property",
                     "name" : "title",
                     "type" : "string"

                  }
               ]
            }
         ]
      };

      var schema=new Schema(definition);

      should.exist(schema);
   });
});
