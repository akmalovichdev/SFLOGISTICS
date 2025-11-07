import React, { useState } from 'react';
import './TrackingWidget.css';

const TrackingWidget = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      alert('Please enter a tracking number');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      const mockData = {
        trackingNumber: trackingNumber,
        status: 'In Transit',
        currentLocation: 'Chicago, IL',
        estimatedDelivery: '2024-03-25',
        history: [
          { date: '2024-03-20', location: 'Los Angeles, CA', status: 'Picked Up' },
          { date: '2024-03-21', location: 'Phoenix, AZ', status: 'In Transit' },
          { date: '2024-03-22', location: 'Albuquerque, NM', status: 'In Transit' },
          { date: '2024-03-23', location: 'Chicago, IL', status: 'In Transit' }
        ]
      };
      setTrackingResult(mockData);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="tracking-widget" className="tracking-widget">
      <div className="container">
        <h2 className="tracking-title">Track Your Shipment</h2>
        <p className="tracking-subtitle">Enter your tracking number to get real-time updates</p>

        <form onSubmit={handleTrack} className="tracking-form">
          <div className="tracking-input-group">
            <input
              type="text"
              placeholder="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="tracking-input"
            />
            <button type="submit" className="tracking-button" disabled={isLoading}>
              {isLoading ? 'Tracking...' : 'TRACK'}
            </button>
          </div>
        </form>

        {trackingResult && (
          <div className="tracking-result">
            <div className="tracking-status-card">
              <h3>Tracking Number: {trackingResult.trackingNumber}</h3>
              <div className="status-badge status-in-transit">{trackingResult.status}</div>
              <div className="tracking-info">
                <div className="info-item">
                  <strong>Current Location:</strong> {trackingResult.currentLocation}
                </div>
                <div className="info-item">
                  <strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}
                </div>
              </div>
            </div>

            <div className="tracking-history">
              <h4>Shipping History</h4>
              <div className="history-timeline">
                {trackingResult.history.map((event, index) => (
                  <div key={index} className="history-item">
                    <div className="history-date">{event.date}</div>
                    <div className="history-content">
                      <div className="history-location">{event.location}</div>
                      <div className="history-status">{event.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackingWidget;

