
// js for poll 

const choices = document.querySelectorAll('input[name=poll]');

const increaseNumber = (node,value) => {
  node.innerText = "0%";
  node.innerText = value + "%";
  animateNumber(0,value, 1200,easeQuad,function(v) {
    node.innerText = Math.ceil(v) + "%";
  })
}

const reset = () => {
  choices.forEach((c,i) => {
    const pollChoice = c.closest(".poll-choice");
    const result = pollChoice.querySelector(".poll-result");
    c.closest(".poll").classList.remove("answered");
    pollChoice.classList.remove("winner");
    result.style.setProperty("--percent", 0 + "%");
    pollChoice.querySelector(".poll-percent").innerText = "0%"; 
  })
}

const handleChange = event => {
  const choice = event.target;
  const choiceIndex = [...choices].indexOf(choice);
  let total = 100;
  let remaining = total;
  let values = [];
  choices.forEach((c,i) => {
    let r = Math.ceil(Math.random() * remaining);
    remaining -= r;
    values[i] = r;
  });
  values[values.length-1] = values[values.length-1] + remaining;
  choices.forEach((c,i) => {
    const pollChoice = c.closest(".poll-choice");
    const result = pollChoice.querySelector(".poll-result");
    pollChoice.classList.remove("winner");
    if ( values[i] === Math.max(...values) ) {
      pollChoice.classList.add("winner");
    }
    result.style.setProperty("--percent", values[i] + "%");
    increaseNumber(pollChoice.querySelector(".poll-percent"), values[i]);
      
  });
  choice.closest(".poll").classList.add("answered");
}

choices.forEach(choice => {
  choice.addEventListener('change', handleChange );
});

// ----

document.querySelector(".reset-part-poll").addEventListener('click', reset);


  function easeQuad(t) {
    return t*t/(2*(t*t-t)+1)
  }
  
  function animateNumber(
    start,
    end,
    duration,
    easingFunction,
    callback 
  ) {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const change = end - start;
    const tick = () => {
      const now = Date.now();
      if (now >= endTime) {
        callback(end);
      } else {
        const elapsed = now - startTime;
        const value = easingFunction(elapsed / duration) * change + start;
        callback(value);
        requestAnimationFrame(tick);
      }
    };
    tick();
  }




  // 
  