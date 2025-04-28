const taskCount = document.getElementById('task');
const completedCount = document.getElementById('count');
const completeButtons = document.querySelectorAll('.all-btn')
const logList = document.getElementById('log-list');

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }
completeButtons.forEach(button => {
    button.addEventListener('click',function() {
      
      taskCount.innerText = Number(taskCount.innerText) - 1;

      
      completedCount.innerText = Number(completedCount.innerText) + 1;

      
      alert("Board Updated Successfully");

      
      button.disabled = true;
      button.style.backgroundColor = "#d1d5db";
      button.style.color = "#6b7280"; 
      button.innerText = "Completed";

      const card = this.parentElement.parentElement;
      const title = card.querySelector('h2').innerText;

      
      const message = `You have Completed The Task: ${title} at ${getCurrentTime()}`;
      const li = document.createElement('li');
      
      li.textContent = message;
      logList.appendChild(li);
      

     
      let allDisabled = true;
        for (let i = 0; i < completeButtons.length; i++) {
  if (!completeButtons[i].disabled) {
    allDisabled = false;
    break;
  }
}

      if (allDisabled) {
        
         
          alert("Congrats! you have completed all the current task");
        
      }
        

    });
  });

  

  
