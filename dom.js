document.getElementById('add-border').addEventListener('click', function () {
    const borderButton = document.getElementById('friend-container');
    borderButton.style.border = '2px solid red';
    borderButton.style.padding = '5px';
});

document.getElementById('add-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "teal";
        friend.style.color = "white";
        friend.style.padding = "2px 20px";
        friend.style.margin = "3px";
    }
});
