const sortableList = document.getElementById('sortable-list');

sortableList.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.classList.add('dragging');
});

sortableList.addEventListener('dragover', (event) => {
    event.preventDefault();
    const draggedElement = document.querySelector('.dragging');
    const boundingClientRect = event.target.getBoundingClientRect();
    const offset = boundingClientRect.y + boundingClientRect.height / 2;
    const targetElement = event.clientY < offset ? event.target : event.target.nextElementSibling;
    sortableList.insertBefore(draggedElement, targetElement);
});

sortableList.addEventListener('dragend', (event) => {
    const draggedElement = document.querySelector('.dragging');
    draggedElement.classList.remove('dragging');
});
