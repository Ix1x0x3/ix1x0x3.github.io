const Terminal = document.getElementById('terminal');

// when terminal text is changed
Terminal.addEventListener('input', (e) => {
    // get the text
    const text = e.target.value;

    console.log(text);
})