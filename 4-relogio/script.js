function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const dayOfWeek = now.toLocaleDateString('pt-br', {weekday: 'long' });

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('day').textContent = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
}

setInterval(updateClock, 1000);
updateClock();