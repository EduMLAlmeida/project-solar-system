import React from 'react';
import Missions from '../data/missions';
import MissionCard from './MissionCard';

class MissionsMap extends React.Component {
  render() {
    return (
      <>
        {Missions.map((mission) => (<MissionCard
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
          key={ mission.name }
        />))}
      </>
    );
  }
}

export default MissionsMap;
