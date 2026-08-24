// Imediately invoked function Expreassion (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();
 
(  (name)=>{
    console.log(`DB  connected Two ${name}`);
} )("said")