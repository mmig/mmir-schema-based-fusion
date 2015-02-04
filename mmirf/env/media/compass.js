/* Max compass mmir media */


newMediaPlugin = {

    initialize: function(callBack){

        //update compass frequency in ms
        var options = {
            frequency: 200
        };

        var orientationOffset = 0;

        var success = function(orientation) {
            orientation.magneticHeading = orientation.magneticHeading - orientationOffset;
            if (orientation.magneticHeading < 0) 
                orientation.magneticHeading = 360 + orientation.magneticHeading;
            //console.log("Compass: "+ JSON.stringify(orientation));
            mmir.InputEngine.raise("compass_interpretation", orientation);
        }

        var fail = function(error) {
            console.error("Compass failed: " + error);
        }

        var watchID = null;


        callBack ({

            beginCompass: function (callbackMethod) {
                //stop first
                if(watchID) {
                    navigator.compass.clearWatch(watchID);
                    watchID = null;
                } 
                if (typeof(callbackMethod) != "undefined" && callbackMethod != null){
                    watchID = navigator.compass.watchHeading(callbackMethod, fail, options);
                } else {
                    watchID = navigator.compass.watchHeading(success, fail, options);
                }
            },
            // Stop watching the compass
            stopCompass: function () {
                if (watchID) {
                    navigator.compass.clearWatch(watchID);
                    watchID = null;
                }
            },

            setCompassOffset: function(offset) {
                console.debug("set offset from " + orientationOffset + " to " + offset.magneticHeading);
                orientationOffset = offset.magneticHeading;
            }

        });
    }
};