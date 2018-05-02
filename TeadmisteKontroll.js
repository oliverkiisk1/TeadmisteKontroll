var FormParamsObject = function(obj) {
    var sisene = 1;
    var ObjectProperty;
	var PathByValue;

    this.setObjectProperty = function (propPath, value) {
        if (propPath && typeof value !== 'undefined') {
            var propPathArr = propPath.split('.');
            var temporary = json;
            var length = propPathArr.length;
            for (var i = 0; i < length - 1; i++) {
                if (temporary.hasOwnProperty(propPathArr[i])) {
                    temporary = temporary[propPathArr[i]];
                } else {
                    temporary = {};
                }
            }
            return json;
        }
    };

    alert(setObjectProperty('param2.param21', 'new value'));

    this.getPathByValue = function (value, obj) {
        var path = "", pathLocal;
        if (!obj) {
            obj = json;
        }
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                if ("object" == typeof obj[i]) {
                    pathLocal = getPathByValue(value, obj);
                    if (pathLocal) {
                        path += i + "." + pathLocal;
                    }
                }
                else if (value == obj[i]) {
                    path = i;
                }
                if (path) {
                    break;
                }
            }
        }
        return path;
    };

    alert(getPathByValue('111'));

    this.getObjectProperty = function (propPath) {
        if (propPath) {
            var propPathArr = propPath.split('.');
            var ret = json;
            for (var i = 0; i < propPathArr.length; i++) {
                ret = ret[propPathArr[i]];
                console.log(ret);
            }
            return ret;
        }
    };

    alert(getObjectProperty('param2.param21'));

};

var json = {
	param1: 'test1',
	param2: {
		param21: 'test2',
		param22: [
			{
				elem1: '111'
			},
			{
				elem1: '222',
				elem2: '111'
			}
		]
	}
};


var getObjectProperty = function(propPath){
	if (propPath){
		var propPathArr = propPath.split('.');
		var ret = json;
		for (var i = 0; i < propPathArr.length; i++){
			ret = ret[propPathArr[i]];
			console.log(ret);
		}
		return ret;
	}
};

alert(getObjectProperty('param2.param21'));

var setObjectProperty = function(propPath, value){
	if (propPath && typeof value !== 'undefined'){
		var propPathArr = propPath.split('.');
		var temporary = json;
		var length = propPathArr.length;
		for (var i = 0; i < length - 1; i++){
			if(temporary.hasOwnProperty(propPathArr[i])){
				temporary = temporary[propPathArr[i]];
			} else {
				temporary = {};
			}
		}
		return json;
	}
};

alert(setObjectProperty('param1.param11.param33', 'new value2'));

var getPathByValue = function(value, obj){
	var path = "", pathLocal;
	if(!obj){
		obj = json;
	}
	for (var i in obj){
		if(obj.hasOwnProperty(i)){
            if(path){
                break;
            }
            if ("object" == typeof obj[i]){
				pathLocal = getPathByValue(value, obj);
				if(pathLocal){
					path += i + "." + pathLocal;
				}
			}
			else if(value == obj[i]){
				path = i;
			}

		}
	}
	return path;
}

alert(getPathByValue('param2.param22.0.elem1'));
