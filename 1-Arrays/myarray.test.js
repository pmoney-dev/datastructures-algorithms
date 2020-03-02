const myArray = require('./myarray');

test('test insertAt', () => {
    var arr = new myArray.MyArray();
    
    arr.insertAt(0, 'A');
    expect(arr.length()).toBe(1);
    expect(arr._array[0]).toBe('A');
    
    arr.insertAt(1, 'D');
    expect(arr.length()).toBe(2);
    expect(arr._array[0]).toBe('A');
    expect(arr._array[1]).toBe('D');

    arr.insertAt(1, 'B');
    expect(arr._array[0]).toBe('A');
    expect(arr._array[1]).toBe('B');
    expect(arr._array[2]).toBe('D');
    expect(arr.length()).toBe(3);

    arr.insertAt(2, 'C');
    expect(arr.length()).toBe(4);
    expect(arr._array[0]).toBe('A');
    expect(arr._array[1]).toBe('B');
    expect(arr._array[2]).toBe('C');
    expect(arr._array[3]).toBe('D');
});

test('Test removeAt', () => {
    var arr = new myArray.MyArray();
   
    arr._array.push('A');
    arr._array.push('B');
    arr._array.push('C');
    arr._array.push('D');

    arr.removeAt(2);

    expect(arr._array[0]).toBe('A');
    expect(arr._array[1]).toBe('B');
    expect(arr._array[2]).toBe('D');

    arr.removeAt(0);

    expect(arr._array[0]).toBe('B');
    expect(arr._array[1]).toBe('D');
});

test('Test exists()', () => {
    var arr = new myArray.MyArray();
    arr._array.push('A');
    arr._array.push('B');
    arr._array.push('C');
    expect(arr.exists('A')).toBe(true);
    expect(arr.exists('B')).toBe(true);
    expect(arr.exists('C')).toBe(true);
    expect(arr.exists('D')).toBe(false);
});

test('Test findIndexOf()', () => {
    var arr = new myArray.MyArray();
    arr._array.push('A');
    arr._array.push('B');
    arr._array.push('C');

    expect(arr2.indexOf('A')).toBe(0);
    expect(arr2.indexOf('B')).toBe(1);
    expect(arr2.indexOf('C')).toBe(2);
    expect(arr2.indexOf('D')).toBe(-1);
});

test('Test reverse()', () => {
    var arr = new myArray.MyArray();
   
    arr._array.push('A');
    arr._array.push('B');
    arr._array.push('C');
    arr.reverse();
    expect(arr._array[0]).toBe('C');
    expect(arr._array[1]).toBe('B');
    expect(arr._array[2]).toBe('A');

    var arr2 = new myArray.MyArray();
       
    arr2._array.push('A');
    arr2._array.push('B');
    arr2._array.push('C');
    arr2._array.push('D');
    arr2.reverse();
    expect(arr2._array[0]).toBe('D');
    expect(arr2._array[1]).toBe('C');
    expect(arr2._array[2]).toBe('B');
    expect(arr2._array[2]).toBe('A');
});
