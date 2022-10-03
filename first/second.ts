document.addEventListener('click', (e) => {
    // e.posX -> e.pageX
    const coords = [e.pageX, e.pageY];

    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});
