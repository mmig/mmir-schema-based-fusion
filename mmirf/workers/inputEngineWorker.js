//Max: inputEngineWorker.js

//wrapper for asynchron event handling using web worker
self.addEventListener('message', function(event) {
	console.log("webworker at work");
	this.mmir.InputEngine._raise(event.data.eventName, event.data.eventData);
}, false);