/**
 * EntitySchema.js
 * A library for describing, manipulating and querying entity schemas
 */

(function(){

   var index=function(o, propertyDefinitions){

      var attributes={};
      var relationships={};
      var fetched={};
      var included={};
      var required={};

      var index={
         "attribute" : attributes,
         "relationship" : relationships,
         "fetched" : fetched,
         "required" : required
      };

      var propertyDefinition;
      var type;

      for(var i=0, l=propertyDefinitions.length; i<l; i++)
      {
         propertyDefinition=propertyDefinitions[i];
         type=propertyDefinition.type;

         // index by type and name
         if(!(type in index))
         {
            type="attribute";
         }

         index[type][propertyDefinition.name]=propertyDefinition;

         // required
         if(("required" in propertyDefinition) && propertyDefinition.required===true)
         {
            required[propertyDefinition.name]=propertyDefinition;
         }
      }

      // console.log("index: ", index);

      o.index=index;
   };

   /**
    * EntitySchema
    */
   function EntitySchema(definition, schema)
   {
      this.definition=definition;

      // NOTE: this was meant to be done on the fly for the sake of memory, but for now, it's done upfront
      index(this, this.definition.properties);
   }

   EntitySchema.prototype.getAttributesByName=function(){
      return this.index.attribute;
   };

   EntitySchema.prototype.getRelationshipsByName=function(){
      return this.index.relationship;
   };

   EntitySchema.prototype.getFetchedByName=function(){
      return this.index.fetched;
   };

   EntitySchema.prototype.getRequiredByName=function(){
      return this.index.required;
   };

   EntitySchema.prototype.getRelationshipsWithDestinationEntity=function(entity){

      var entityName=typeof(entity)==="string" ? entity : entity.getName();

      if(!this.relationshipsWithDestinationEntity[entityName])
      {
         this.relationshipsWithDestinationEntity[entityName]=this.properties.filter(function(property){ return property.getEntity().getName()===entityName; });
      }

      return this.relationshipsWithDestinationEntity[entityName];
   };

   // export
   (typeof(module)!=="undefined" ? (module.exports=EntitySchema) : ((typeof(define)!=="undefined" && define.amd) ? define(function(){ return EntitySchema; }) : (window.EntitySchema=EntitySchema)));
})();
