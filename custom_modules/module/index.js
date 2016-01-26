var path = require('path'); 
var appDir = path.dirname(require.main.filename);

function ModuleLoader (rootPath) {
	if (typeof rootPath === 'undefined')
		var rootPath = '/ejs/modules/';
	this.rootPath = rootPath;
}

ModuleLoader.prototype.getModulePath = function (module) {
	return path.resolve(appDir, this.rootPath + module + '/index.ejs');
}

ModuleLoader.prototype.moduleExists = function (module) {
	var modulePath = this.getModulePath(module)
	if (path.existsSync(modulePath))
		return true;
	return false;
}

module.exports = ModuleLoader;