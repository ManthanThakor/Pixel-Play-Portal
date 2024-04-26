// const container = document.querySelector('.container');
// const image = document.querySelector('.moving-image');

// container.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
  
//   const containerRect = container.getBoundingClientRect();
//   const containerX = containerRect.left;
//   const containerY = containerRect.top;
  
//   const imageHalfWidth = image.offsetWidth / 2;
//   const imageHalfHeight = image.offsetHeight / 2;
  
//   const x = mouseX - containerX - imageHalfWidth;
//   const y = mouseY - containerY - imageHalfHeight;
  
//   image.style.transform = `translate(${x}px, ${y}px)`;
// });

// container.addEventListener('mouseleave', () => {
//   image.style.transform = 'translate(-50%, -50%)';
// });
