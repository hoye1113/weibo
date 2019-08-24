let hoye = {};

hoye.getTime = function () { //获取时间
    var a = new Date(),
        year = a.getFullYear(),
        month = a.getMonth() + 1 < 10 ? '0' + (a.getMonth() + 1) : a.getMonth() + 1,
        day = a.getDate() < 10 ? '0' + a.getDate() : a.getDate(),
        hours = a.getHours() < 10 ? '0' + a.getHours() : a.getHours(),
        min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
        second = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    return (year + '-' + month + '-' + day + '  ' + hours + ':' + min + ':' + second);
}

hoye.number = function (min, max) { // 当前时间戳 + 大的随机数
    return Math.floor(Math.random() * (max - min + 1) + min);
}
hoye.getId = function () {
    let date = new Date();
    let time = date.getTime(); // 得到的是从1970年1月1日到现在为止的毫秒总数
    // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
    let r = this.number(100000, 999999);
    // 把两个数字连起来
    let id = time + '' + r;
    return id;
}

hoye.sixteenColor = function () { //获得随机十六进制颜色
    let result = '#';
    for (var i = 0; i < 6; i++) {
        result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
}

hoye.rgbColor = function () { //获得随机rgb格式颜色
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}


hoye.rgbColorZjj = function () { //获得随机rgb格式颜色
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}