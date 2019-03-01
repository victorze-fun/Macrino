let content = document.getElementById("content");

function getText() {
    fetch('foo.txt')
        .then(res => res.text())
        .then(data => content.innerHTML = data);
}
