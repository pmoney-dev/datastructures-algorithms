class MyArray {
    constructor() {
        this._array = [];
    }

    insertAt(index, value) {
        var newArray = [];
        
        //Copy everything before
        for(var i = 0; i < index; i++) {
            newArray[i] = this._array[i];
        } 

        //Insert the new value
        newArray[index] = value;

        //Copy everything after
        for(i = index + 1; i < this._array.length + 1; i++) {
            newArray[i] = this._array[i - 1];
        } 
        
        this._array = newArray;
    }

    // Removes element at the given index. 
    removeAt(index) {

    }

    // Returns true if value exists, returns false if value does not exist
    exists(value) {

    }

    // Returns the index number if found, returns -1 if not found
    findIndexOf(value) {

    }

    // Reverses the array
    reverse(){

    }

    length() {
        return this._array.length;
    }
}



module.exports.MyArray = MyArray