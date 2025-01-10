document.addEventListener('DOMContentLoaded', () => {
    const userStats = {
        essays: 30,
        hoursSaved: 50,
        efficiency: 70
    };

    document.querySelector('.smodin-benefits').innerHTML = `
        <h3>Your Smodin Benefits</h3>
        <ul>
            <li><strong>${userStats.essays} essays</strong> written effortlessly</li>
            <li><strong>${userStats.hoursSaved}+ hours</strong> saved per year with smart tools</li>
            <li>Boosted productivity with Rewriter, AI Detector, and more</li>
        </ul>
    `;

    document.querySelector('.average-stats').innerHTML = `
        <h3>Want to miss out?</h3>
        <p>On average, users report a ${userStats.efficiency}% increase in efficiency!</p>
        <button>Keep Your Productivity Boost for Just $20/Month</button>
    `;
});
