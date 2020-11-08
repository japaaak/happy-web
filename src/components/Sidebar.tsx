import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../assets/mapmarker.svg';
import { useHistory } from 'react-router-dom';

import '../styles/components/sidebar.css';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>

  );
}

export default Sidebar;
