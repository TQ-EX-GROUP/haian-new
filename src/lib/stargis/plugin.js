/* eslint-disable */

export var FcList = new HashMap();

export function HashMap() {
    /** Map ´óÐ¡ **/
    var size = 0;
    /** ¶ÔÏó **/
    var entry = new Object();

    /** ´æ **/
    this.put = function (key, value) {
        if (!this.containsKey(key)) {
            size++;
        }
        entry[key] = value;
    };

    /** È¡ **/
    this.get = function (key) {
        return this.containsKey(key) ? entry[key] : null;
    };

    /** ÊÇ·ñ°üº¬ Key **/
    this.containsKey = function (key) {
        return (key in entry);
    };

    /** ËùÓÐ Value **/
    this.values = function () {
        var values = new Array();
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    };

    /** ËùÓÐ Key **/
    this.keys = function () {
        var keys = new Array();
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    };

    /** Map Size **/
    this.size = function () {
        return size;
    };

    /* Çå¿Õ */
    this.clear = function () {
        size = 0;
        entry = new Object();
    }; 
}

var _hook = (function () {
    var renderControl = null;
    var LayerList = new HashMap();
    var FcList = new HashMap();
    var PointfcVSlinefc = new HashMap();
    var pipefeatureclass = new HashMap();
    var pipelinefc = new HashMap();
    var pipeptfc = new HashMap();
    var shapefc = new HashMap();
    var labelGuid = new HashMap();
    var HomePosition = null;
    var analysisGuid = new HashMap();
    return {
        renderControl: renderControl,
        LayerList: LayerList,
        FcList: FcList,
        PointfcVSlinefc: PointfcVSlinefc,
        pipefeatureclass: pipefeatureclass,
        labelGuid: labelGuid,
        pipelinefc: pipelinefc,
        pipeptfc: pipeptfc,
        shapefc: shapefc,
        HomePosition: HomePosition,
        analysisGuid: analysisGuid
    };
})();

function getSamplesPath() {
    var flag = decodeURI(location.pathname).lastIndexOf("StarGIS Earth SDK");
    if (flag > 0) {
        return (decodeURI(location.pathname).substring(1, flag) + "StarGIS Earth SDK");
    }
}

function getSamplesRelatePath(relPath) {
    return (getSamplesPath() + relPath).replace(/\//g, "\\");
}

/*
ÑÕÉ«Öµ×ª»»******************************************************************************************
*/
function colorFromARGB(a, b, g, r) {
    if (a <= 0)
    { a = 0; }
    if (a >= 100)
    { a = 100; }
    a = 2.55 * a;
    return (a << 24 | b << 16 | g << 8 | r) >>> 0;  // Í¨¹ýÓÒÒÆ×ª³ÉÎÞ·ûºÅÕûÊý
}

