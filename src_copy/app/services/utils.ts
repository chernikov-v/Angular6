
export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export const file2base64 = (file: File, callback: Function ) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback && callback(reader.result);
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export const copy = object => Object.prototype.toString.call(object) === '[object Object]' ? JSON.parse(JSON.stringify(object)) : null;




