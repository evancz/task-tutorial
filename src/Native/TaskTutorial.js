Elm.Native.TaskTutorial = {};
Elm.Native.TaskTutorial.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.TaskTutorial = localRuntime.Native.TaskTutorial || {};
	if (localRuntime.Native.TaskTutorial.values)
	{
		return localRuntime.Native.TaskTutorial.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function log(string)
	{
		return Task.asyncFunction(function(callback) {
			console.log(string);
			return callback(Task.succeed(Utils.Tuple0));
		});
	}


	var getCurrentTime = Task.asyncFunction(function(callback) {
		return callback(Task.succeed(Date.now()));
	});


	return localRuntime.Native.TaskTutorial.values = {
		log: log,
		getCurrentTime: getCurrentTime
	};
};
