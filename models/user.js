/* Max user */

var mmir = window.mmir ||
{};

mmir.User = (function(){
    var instance = null;
    
    function constructor(){
        var _position = new Position(0,0);
        return {
            position: _position,
            setPosition: function (pos) {
                _position.x = pos.x;
                _position.y = pos.y;
            }
        };
    }
    
    return {
        getInstance: function(){
            if (instance === null) {
                instance = constructor();
            }
            return instance;
        }
    };
    
})();