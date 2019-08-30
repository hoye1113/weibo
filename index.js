let hoye = {};

hoye.getTime = function() { //获取时间
    var a = new Date(),
        year = a.getFullYear(),
        month = a.getMonth() + 1 < 10 ? '0' + (a.getMonth() + 1) : a.getMonth() + 1,
        day = a.getDate() < 10 ? '0' + a.getDate() : a.getDate(),
        hours = a.getHours() < 10 ? '0' + a.getHours() : a.getHours(),
        min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
        second = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    return (year + '-' + month + '-' + day + '  ' + hours + ':' + min + ':' + second);
}

hoye.number = function(min, max) { // 当前时间戳 + 大的随机数
    return Math.floor(Math.random() * (max - min + 1) + min);
}
hoye.getId = function() {
    let date = new Date();
    let time = date.getTime(); // 得到的是从1970年1月1日到现在为止的毫秒总数
    // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
    let r = this.number(100000, 999999);
    // 把两个数字连起来
    let id = time + '' + r;
    return id;
}

hoye.sixteenColor = function() { //获得随机十六进制颜色
    let result = '#';
    for (var i = 0; i < 6; i++) {
        result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
}

hoye.rgbColor = function() { //获得随机rgb格式颜色
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

hoye.getLocalDataArray = function(key) {
    //从localStorage里面根据指定的键(key)获取一个数组
    //参数key：localStorage里面根据根据key存储的数据

    let datas = localStorage.getItem(key);
    let arr = JSON.parse(datas);
    return arr || [];
}




hoye.saveLocalDataArray = function(key, arr) {
    //将一个数组(arr)以指定的键(key)存储到localStorage里面
    //key：localStorage里面根据根据key存储的数据
    //arr: 要存入localStorage的key里面的数据

    let json = JSON.stringify(arr);
    localStorage.setItem(key, json);
}

hoye.appendDataIntoArray = function(key, data) {
    //向localStorage里面指定键(key) 的数组数据追加一个数据对象（ data）
    //key： localStorage里面根据根据key存储的数据
    //data: 你要追加到localstorage的数据
    let arr = hoye.getLocalDataArray(key);
    arr.push(data);
    hoye.saveLocalDataArray(key, arr);
}


hoye.deleteLocalDataById = function(key, id) {
    //根据对应的id从localStorage中指定键(key) 的数组中删除一条数据
    //key： localStorage里面根据根据key存储的数据
    //id: 根据你传入的id， 找到localStorage里面的key对应的数据， 删除掉
    let arr = hoye.getLocalDataArray(key);
    arr.forEach((e, i) => {
        if (id == e.id) {
            arr.splice(i, 1);
        }
    });
	hoye.saveLocalDataArray(key, arr);
}


hoye.modifyLocalDataById = function(key, id, data) {
    // 根据id修改localStorage里面的指定键(key) 的数组数据
    // key： localStorage里面根据根据key存储的数据
    // id: 根据你传入的id， 找到localStorage里面的key对应的数据
    // data: 把通过id找到的数据， 修改为你传入的data

    let arr = hoye.getLocalDataArray(key);
    arr.forEach((e, i) => {
        if (id == e.id) {
            arr.splice(i, 1, data);
        }
    });
	hoye.saveLocalDataArray(key, arr);
}
