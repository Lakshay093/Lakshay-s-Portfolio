// neonPulse.js
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(thumb => {
    let direction = 1;
    let glow = 0;
    setInterval(() => {
        glow += direction * 0.5;
        if (glow > 10 || glow < 0) direction *= -1;
        thumb.style.boxShadow = `0 0 ${glow}px ${glow / 2}px #22d3ee, 0 0 ${glow/2}px ${glow/4}px #f43f5e`;
    }, 50);
});