/**
 * PropertySchema.js
 * A library for describing, manipulating and querying property schemas
 */

(function(){

   /**
    * PropertyDescription
    */
   function PropertySchema(definition)
   {
      this.definition=definition;
   }

   /**
    * Returns a list of properties whose values are dependent on the value of the receiver
    */
   PropertySchema.prototype.getDependentProperties=function(){

   };

   // export
   (typeof(module)!=="undefined" ? (module.exports=PropertySchema) : ((typeof(define)!=="undefined" && define.amd) ? define(function(){ return PropertySchema; }) : (window.PropertySchema=PropertySchema)));
})();
