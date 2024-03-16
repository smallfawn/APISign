由于没有人买金彩云算法 因此
function getSign(data) {
    const crypto = require('crypto');
    const params = new URLSearchParams(data);
    const keyValuePairs = [];
    for (let param of params.entries()) {
        keyValuePairs.push(param);
    }
    keyValuePairs.sort((a, b) => a[0].localeCompare(b[0]));
    const sortedParams = keyValuePairs.map(([key, value]) => `${key}=${value}`).join('&');
    //console.log(sortedParams);
    let signStr = sortedParams + '' + `76fcabdf55696b8c9daa9a05fceef5c8`
    let sign = crypto.createHash('md5').update(signStr).digest('hex')
    return sign
}
金彩云 传URL的❓后面的参数 获得sign
传的时候不要穿sign =  但是必须穿timestamp（13位）和noncestr(32位)
