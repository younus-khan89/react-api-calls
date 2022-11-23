import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PostApi from './PostApi';
import GetApi from './GetApi';
import PutApi from './PutApi';
import DeleteApi from './DeleteApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PutApi />
    <PostApi />
    <GetApi />
    <DeleteApi />
  </React.StrictMode>
);
