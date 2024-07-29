function afterNextPropagation(callback) {
    setTimeout(callback, 0);
}

// Usage
afterNextPropagation(() => {
    console.log('Callback executed after the next propagation.');
});
