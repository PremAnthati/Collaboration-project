import React from 'react';
import '../styles/dashboard.css';

const Dashboard = () => {
    const cards = [
        { title: 'Total Revenue', value: '$45,231', trend: '+20.1%', trendSpecific: 'trend-up', icon: '💰' },
        { title: 'Active Users', value: '+2350', trend: '+180.1%', trendSpecific: 'trend-up', icon: '👥' },
        { title: 'New Sales', value: '+12,234', trend: '+19%', trendSpecific: 'trend-up', icon: '📈' },
        { title: 'Active Now', value: '+573', trend: '+201 since last hour', trendSpecific: 'trend-up', icon: '⚡' },
        { title: 'Pending Orders', value: '45', trend: '-2.3%', trendSpecific: 'trend-down', icon: '📦' },
        { title: 'Support Tickets', value: '12', trend: '+4.5%', trendSpecific: 'trend-neutral', icon: '🎫' },
    ];

    return (
        <div className="dashboard-container fade-in">
            <header className="dashboard-header slide-up">
                <h1>Dashboard</h1>
                <div className="header-actions">
                    <button>Settings</button>
                    <button onClick={() => window.location.href = '/login'}>Logout</button>
                </div>
            </header>

            <main className="dashboard-content">
                <div className="dashboard-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="dashboard-card slide-up">
                            <div className="card-header">
                                <div className="card-icon">{card.icon}</div>
                                <h3 className="card-title">{card.title}</h3>
                            </div>
                            <p className="card-value">{card.value}</p>
                            <p className={`card-trend ${card.trendSpecific}`}>{card.trend}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
