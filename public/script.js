document.getElementById('b').addEventListener('click', () => {
    fetch('/api/v1/random-joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('d').innerText = `"${data.joke}\n${data.punchline}"`;
        });
});