/**
 * EntitySchema.js
 * A library for describing, manipulating and querying entity schemas
 */

(function(){

   var index=function(o, entityDefinitions){

      var entitiesByName={};

      var index={
         "entitiesByName": entitiesByName
      };

      for(var i=0, l=entityDefinitions.length; i<l; i++)
      {
         entityDefinition=entityDefinitions[i];

         // index by type and name
         entitiesByName[entityDefinition.name]=entityDefinition;
      }

      o.index=index;
   };

   /**
    * StoreSchema
    */
   function StoreSchema(definition)
   {
      this.definition=definition;

      // index(this, definition.entities);
   }

   // StoreSchema.prototype.getRelationshipsWithDestinationEntity=function(entity){
   //
   //    var entityName=typeof(entity)==="string" ? entity : entity.getName();
   //
   //    if(!this.relationshipsWithDestinationEntity[entityName])
   //    {
   //       this.relationshipsWithDestinationEntity[entityName]=this.properties.filter(function(property){ return property.getEntity().getName()===entityName; });
   //    }
   //
   //    return this.relationshipsWithDestinationEntity[entityName];
   // };

   // export
   (typeof(module)!=="undefined" ? (module.exports=StoreSchema) : ((typeof(define)!=="undefined" && define.amd) ? define(function(){ return StoreSchema; }) : (window.StoreSchema=StoreSchema)));
})();
