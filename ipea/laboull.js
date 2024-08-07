class MyClass {
    constructor(parent) {
        this.parent = parent;
    }

    // Other methods can be defined here
}

// Example usage:
let someParent = document.getElementById('parentElement'); // Example parent element
let obj = new MyClass(someParent); // Create an instance of MyClass with someParent

console.log(obj.parent); // Accessing the 'parent' property of the obj instance
