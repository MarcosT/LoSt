var LoSt = (function (LoSt) {

    return {
        set: function (key, value) {
            if (!key || !value) return;
            
            if(value instanceof Date) {
                localStorage.setItem(key, value.getTime());
            } else if(typeof value === 'object') {
                localStorage.setItem( key, JSON.stringify(value));
            } else {
                localStorage.setItem(key, value);
            }
        }
        , get: function (key) {
            var value;
            
            try {
                value = localStorage.getItem(key);
            } catch (e) {
                value = null;
            }

            return value;            
        }
        , getObject: function (key) {
            var value;
            
            try {
                value = JSON.parse( localStorage.getItem(key) );
            } catch (e) {
                value = null;
            }

            return value;            
        }
        , getBoolean: function (key) {
              var value;
              
              try {
                  value = localStorage.getItem(key) === "true";
              } catch (e) {
                  value = null;
              }

              return value;            
        }
        , getNumber: function (key) {
            var value;
            
            try {
                value = +localStorage.getItem(key); //short for parseFloat
            } catch (e) {
                value = Number.NaN;
            }

            return value;            
        }
        , getDate: function (key) {
            var value;
            
            try {
                value = new Date( +localStorage.getItem(key) );
            } catch (e) {
                value = null;
            }

            return value;            
        }
        , getRegEx: function (key) {
            var value, components;
            
            try {
                components = localStorage.getItem(key).match("^/(.*)/([a-z]*)$");
                value = new RegExp(components[1], components[2]);
            } catch (e) {
                value = null;
            }

            return value;            
        }
        , remove: function (key) {
            try {
                  localStorage.removeItem(key);                
            } catch (e) {}
        }
        , empty: function () { localStorage.clear(); }
    };
    
})(LoSt || {});
