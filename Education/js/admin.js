// Number Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Charts using Chart.js
const ctx1 = document.getElementById('studentsChart').getContext('2d');
const studentsChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'New Students',
            data: [50, 75, 150, 120, 200, 180],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79,70,229,0.2)',
            tension: 0.4
        }]
    },
    options: { responsive:true, plugins:{ legend:{ display:true } } }
});

const ctx2 = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'Revenue ($)',
            data: [2000, 3000, 4000, 3500, 5000, 4500],
            backgroundColor: '#4f46e5'
        }]
    },
    options: { responsive:true, plugins:{ legend:{ display:false } } }
});
