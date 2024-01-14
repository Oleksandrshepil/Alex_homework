"use strickt"
  function createObject() {
    const myObject = {
        property1: 'Значення 1',
        property2: 'Значення 2',
        property3: 'Значення 3',

        getInfo: function () {
            for (const key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key}: ${this[key]}`);
                }
            }
        },
    };

    return myObject;
}

const object = createObject();
object.getInfo();
object.newProperty = 'Нова властивість!';
object.getInfo();