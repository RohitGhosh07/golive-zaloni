const confetti = () => {
  const colors = ['#3B82F6', '#8B5CF6', '#14B8A6'];
  
  const createElements = (root: HTMLElement, elementCount: number) => {
    return Array.from({ length: elementCount }).map((_, index) => {
      const element = document.createElement('div');
      const color = colors[index % colors.length];
      
      element.style.backgroundColor = color;
      element.style.width = '10px';
      element.style.height = '10px';
      element.style.position = 'absolute';
      element.style.zIndex = '100';
      element.style.borderRadius = '50%';
      element.style.opacity = '0';
      
      root.appendChild(element);
      return element;
    });
  };

  const shoot = (element: HTMLElement) => {
    const angle = Math.random() * Math.PI * 2;
    const velocity = 30 + Math.random() * 30;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    
    element.style.opacity = '1';
    element.style.transform = 'translate(-50%, -50%)';
    element.style.left = `${initialX}px`;
    element.style.top = `${initialY}px`;
    
    const startTime = Date.now();
    
    const update = () => {
      const elapsed = Date.now() - startTime;
      const duration = 2000; // 2 seconds
      
      if (elapsed < duration) {
        const progress = elapsed / duration;
        
        // Apply gravity and movement
        const x = initialX + tx * progress;
        const y = initialY + ty * progress + 100 * Math.pow(progress, 2);
        
        // Apply rotation
        const rotation = 360 * progress;
        
        // Apply fade out towards the end
        const opacity = progress > 0.7 ? 1 - ((progress - 0.7) / 0.3) : 1;
        
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        element.style.opacity = `${opacity}`;
        
        requestAnimationFrame(update);
      } else {
        element.remove();
      }
    };
    
    requestAnimationFrame(update);
  };

  const root = document.createElement('div');
  root.style.position = 'fixed';
  root.style.top = '0';
  root.style.left = '0';
  root.style.width = '100%';
  root.style.height = '100%';
  root.style.pointerEvents = 'none';
  root.style.zIndex = '9999';
  document.body.appendChild(root);
  
  const elements = createElements(root, 100);
  elements.forEach((element) => {
    setTimeout(() => {
      shoot(element);
    }, Math.random() * 500);
  });
  
  // Remove container after animation completes
  setTimeout(() => {
    root.remove();
  }, 3000);
};

export default confetti;