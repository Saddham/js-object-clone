(function() {
    'use strict';

    Object.clone = function(obj) {
        //in case of primitives
        if (obj === null || typeof obj !== 'object')
            return obj;

        //date objects should be 
        if (obj instanceof Date) {
            let clonedDate = new Date(obj.getTime());
            
            return clonedDate;
        }
        
        //handle Array
        if (Array.isArray(obj)) {
            let clonedArray = [];
            
            obj.forEach(function(item) {
                clonedArray.push(Object.clone(item));
            });

            return clonedArray;
        }

        //lastly, handle objects
        var clonedObj = new obj.constructor();
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop))
                clonedObj[prop] = Object.clone(obj[prop]);
        }

        return clonedObj;
    }
})();
