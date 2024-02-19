//4.)
function showClickedItem(event) {
    const clickedItemText = event.target.textContent;
    alert("Klikli jste na položku: " + clickedItemText);
}
const myList = document.getElementById("myList");
myList.addEventListener("click", showClickedItem);

