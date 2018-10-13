(function() {
    'use strict';

    Object.clone = function(obj) {
        //Primitive
        if (obj === null || typeof obj !== 'object')
            return obj;

        //Date
        if (obj instanceof Date) {
            let clonedDate = new Date(obj.getTime());
            
            return clonedDate;
        }
        
        //Array
        if (Array.isArray(obj)) {
            let clonedArray = [];
            
            obj.forEach(function(item) {
                clonedArray.push(Object.clone(item));
            });

            return clonedArray;
        }

        //Object
        var clonedObj = new obj.constructor();
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop))
                clonedObj[prop] = Object.clone(obj[prop]);
        }

        return clonedObj;
    }
})();
