/* Max accelerometer mmir media */


newMediaPlugin = {

    initialize: function(callBack){

        //update accleration frequency in ms
        var options = {
            frequency: 200
        };

        var success = function(acceleration) {
            mmir.InputEngine.raise("accelerometer_interpretation", acceleration);
        }

        var fail = function(error) {
            console.log("Accelerometer failed: " + error);
        }

        var watchID = null;


        callBack ({

            beginAccelerometer: function (callbackMethod) {

                //stop first
                if(watchID) {
                    navigator.accelerometer.clearWatch(watchID);
                    watchID = null;
                } 

                if (callbackMethod != null){
                    watchID = navigator.accelerometer.watchAcceleration(callbackMethod, fail, options);
                } else {
                    watchID = navigator.accelerometer.watchAcceleration(success, fail, options);
                }

            },
            // Stop watching the acceleration
            stopAccelerometer: function () {
                if (watchID) {
                    navigator.accelerometer.clearWatch(watchID);
                    watchID = null;
                }
            }
        });

    }
};