import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AddListing from './AddListing';
import OldListings from './OldListings';
import UserComments from './UserComments';
import Analytics from './Analytics';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="add-listing">Add New Listing</Link></li>
          <li><Link to="old-listings">Old Listings</Link></li>
          <li><Link to="comments">User Comments</Link></li>
          <li><Link to="analytics">Analytics</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="add-listing" element={<AddListing />} />
        <Route path="old-listings" element={<OldListings />} />
        <Route path="comments" element={<UserComments />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
