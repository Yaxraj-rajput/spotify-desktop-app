 // script.js
 const resizableDiv = document.getElementById('myDiv');
 let isResizing = false;
 let initialWidth = 0;

 resizableDiv.addEventListener('mousedown', (e) => {
   isResizing = true;
   initialWidth = resizableDiv.offsetWidth;
   startX = e.clientX;
   resizableDiv.style.userSelect = 'none'; // Prevent text selection during resize
 });

 document.addEventListener('mousemove', (e) => {
   if (!isResizing) return;

   const width = initialWidth + (e.clientX - startX);
   resizableDiv.style.width = `${width}px`;
 });

 document.addEventListener('mouseup', () => {
   isResizing = false;
   resizableDiv.style.userSelect = 'auto'; // Restore text selection
 });
