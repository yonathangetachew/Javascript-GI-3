function createPII(name, ssn) {
    var pii = {
      name: name,
      ssn: ssn
    };
    
    return {
      getName: function() {
        return pii.name;
      }
    };
  }
  
  // Example usage:
  var customer = createPII('John Doe', '123-45-6789');
  console.log(`Name: ${customer.getName()}`); // prints "John Doe"
  console.log(`SSN: ${customer.ssn}`); // prints "undefined" (can't access the ssn property directly)
  