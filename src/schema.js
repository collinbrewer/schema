/**
 * Schema.js
 * A library for describing, manipulating and querying schemas
 */

(function(){

   function Schema(definition, inferred)
   {
      this.definition=definition;

      var schemaType=definition.schemaType || inferred;

      return new Schema.registeredByType[schemaType](definition);
   }

   Schema.registeredByType={};

   Schema.register=function(type, schemaClass){
      Schema.registeredByType[type]=schemaClass;
   };

   var infer=function(data){

      var inferredType;

      if(typeof(data)==="object")
      {
         if(data.constructor===Array)
         {

         }
      }
   };

   Schema.infer=infer;

   // export
   (typeof(module)!=="undefined" ? (module.exports=Schema) : ((typeof(define)!=="undefined" && define.amd) ? define(function(){ return Schema; }) : (window.Schema=Schema)));
})();
