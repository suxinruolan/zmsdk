var crypto = require('crypto');
genSignature = function (secretKey, paramsJson) {
  var sorter = function (paramsJson) {
    var sortedJson = {};
    var sortedKeys = Object.keys(paramsJson).sort();
    for (var i = 0; i < sortedKeys.length; i++) {
      sortedJson[sortedKeys[i]] = paramsJson[sortedKeys[i]]
    }
    return sortedJson;
  }
  var sortedParam = sorter(paramsJson);
  var needSignatureStr = "";
  for (var key in sortedParam) {
    var value = sortedParam[key];
    needSignatureStr = needSignatureStr + key + value;
  }
  needSignatureStr += secretKey;
  console.log('needSignatureStr', needSignatureStr);
  var md5er = crypto.createHash('md5');//MD5加密工具
  md5er.update(needSignatureStr, "UTF-8");
  return md5er.digest('hex');
};
module.exports = genSignature