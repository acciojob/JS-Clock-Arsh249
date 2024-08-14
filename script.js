function updateClock() {
    const now = new Date();

    // Select the minute hand element
    const minuteHand = document.querySelector('.min-hand');

    // Get the current minutes
    const minutes = now.getMinutes();
    
    // Calculate the degrees for the minute hand rotation
    const minsDegrees = 6 * minutes + 90;
    
    // Convert degrees to radians
    const radians = minsDegrees * Math.PI / 180;

    // Build the rotation matrix
    let a = Math.cos(radians);
    let b = Math.sin(radians);
    let c = -b;
    let d = a;
    let e = 0;
    let f = 0;

    // Round values to six decimal places
    a = parseFloat(a.toFixed(6));
    b = parseFloat(b.toFixed(6));
    c = parseFloat(c.toFixed(6));
    d = parseFloat(d.toFixed(6));
    e = parseFloat(e.toFixed(6));
    f = parseFloat(f.toFixed(6));

    // Apply the matrix transformation to the minute hand
    minuteHand.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
}

// Update the clock every minute
setInterval(updateClock, 60000);

// Initial call to set the clock hands immediately
updateClock();
