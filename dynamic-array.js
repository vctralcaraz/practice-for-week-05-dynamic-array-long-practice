class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if(this.length + 1 > this.capacity) this.resize();

    this.data[this.length] = val;
    this.length += 1;
  }


  pop() {

    // Your code here
    if(this.length === 0) return undefined;

    let index = this.length - 1;  // index the last element of the array
    let el = this.data[index];  // save the last element of the array to a variable
    this.data[index] = undefined;  // set the last element of the array to undefined
    this.length -= 1;  // reduce the length of the array by 1

    return el;
  }

  shift() {

    // Your code here
    if(this.length === 0) return undefined;

    let el = this.data[0];  // save the first element of the array to a variable
    
    for(let i = 0; i < this.length - 1; i++) {  // move all the elements down an index
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = undefined;  // set the last element of the array to undefined
    this.length -= 1;  // reduce the length of the array by 1

    return el;
  }

  unshift(val) {

    // Your code here
    if(this.length + 1 > this.capacity) this.resize();

    for(let i = this.length; i > 0; i--) {  // move all the elements up an index
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;  // set the val as the first element of the array
    this.length += 1;  // increased the length by 1
  }

  indexOf(val) {

    // Your code here

    for(let i = 0; i < this.length; i++) {
      if(this.data[i] === val) {
        return i;
      }
    }

    return -1;
  }

  resize() {

    // Your code here
    this.capacity *= 2;  // double capacity

    let temp = this.data;

    this.data = new Array(this.capacity);

    for(let i = 0; i < this.length; i++) {
      this.data[i] = temp[i];
    }
  }

}


module.exports = DynamicArray;