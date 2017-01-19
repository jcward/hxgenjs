Object.defineProperty(exports, "__esModule", {value: true});

exports.default = function $import(obj) {
	if(obj && obj.__esModule) {
		return obj.hasOwnProperty('default') ? obj : {default: obj};
	} else { 
		var newObj = {};
		if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key))
					newObj[key] = obj[key];
			}
		} 
		newObj.default = obj;
		return newObj;
	}
}