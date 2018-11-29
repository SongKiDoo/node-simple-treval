module.exports = function(json){
    var returnedJson = [];
    if(!json.length) return returnedJson;
    // console.log(typeof json, json)
    // try {
    //     json = JSON.parse(json);
    // } catch (e) {
    //     return returnedJson;
    // }

    // Extract the JSON we need
    if(json[0].hasOwnProperty('dataValues')){
        console.log("HI: " + json[0].dataValues);
        returnedJson = json[0].dataValues;
    } else {
        console.log(json[0]);
        returnedJson = json[0];
    }

    return returnedJson;
}