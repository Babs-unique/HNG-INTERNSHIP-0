const time = document.querySelector('[data-testid="test-user-time"]');
function updateTime(){
    const timeUpdate = Date.now();
    time.textContent = timeUpdate;
}
updateTime();
setInterval(updateTime,1000)