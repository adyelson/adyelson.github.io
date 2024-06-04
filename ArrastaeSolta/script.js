let areas = {
    a: null,
    b: null,
    c: null
  };
  
  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
    item.addEventListener('touchstart', touchStart);
    item.addEventListener('touchend', touchEnd);
    item.addEventListener('touchmove', touchMove);
  });
  
  document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
    area.addEventListener('touchenter', touchEnter);
    area.addEventListener('touchleave', touchLeave);
    area.addEventListener('touchmove', touchMove);
  });
  
  // Neutral Area
  document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
  document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
  document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);
  document.querySelector('.neutralArea').addEventListener('touchenter', touchEnterNeutral);
  document.querySelector('.neutralArea').addEventListener('touchleave', touchLeaveNeutral);
  document.querySelector('.neutralArea').addEventListener('touchmove', touchMoveNeutral);
  
  // Functions for Items
  function dragStart(e) {
    e.currentTarget.classList.add('dragging');
  }
  
  function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
  }
  
  function touchStart(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragging');
  }
  
  function touchEnd(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragging');
  }
  
  function touchMove(e) {
    e.preventDefault();
    const touch = e.targetTouches[0];
    const offsetX = touch.clientX - touch.target.offsetLeft;
    const offsetY = touch.clientY - touch.target.offsetTop;
    const item = document.querySelector('.item.dragging');
    item.style.left = touch.pageX - offsetX + 'px';
    item.style.top = touch.pageY - offsetY + 'px';
  }
  
  // Functions for Areas
  function dragOver(e) {
    if (e.currentTarget.querySelector('.item') === null) {
      e.preventDefault();
      e.currentTarget.classList.add('hover');
    }
  }
  
  function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
  }
  
  function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    if (e.currentTarget.querySelector('.item') === null) {
      e.currentTarget.appendChild(dragItem);
      updateAreas();
    }
  }
  
  function touchEnter(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
  }
  
  function touchLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
  }
  
  // Functions for Neutral Area
  function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
  }
  
  function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
  }
  
  function dropNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
  }
  
  function touchEnterNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
  }
  
  function touchLeaveNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('hover');
  }
  
  function touchMoveNeutral(e) {
    e.preventDefault();
  }
  
  // Update Areas
  function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
      let name = area.getAttribute('data-name');
  
      if(area.querySelector('.item') !== null){
        areas[name] = area.querySelector('.item').innerHTML;
    }else{
        areas[name] = null;
    }
});

if(areas.a === '1' && areas.b === '2' && areas.c ==='3'){
    document.querySelector('.areas').classList.add('correct');
}else{
    document.querySelector('.areas').classList.remove('correct');
}
}

// set up event listeners for each item and area
document.querySelectorAll('.item').forEach(item=>{
item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);
item.addEventListener('touchstart', touchStart);
item.addEventListener('touchend', touchEnd);
});

document.querySelectorAll('.area').forEach(area=>{
area.addEventListener('dragover', dragOver);
area.addEventListener('dragleave', dragLeave);
area.addEventListener('drop', drop);    
area.addEventListener('touchenter', touchEnter);
area.addEventListener('touchleave', touchLeave);
area.addEventListener('touchmove', touchMove);
});

