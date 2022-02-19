import React from 'react';
import Title from './Title';
import MissionsMap from './MissionsMap';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions"><Title headline="Missões" /></div>
        <MissionsMap />
      </>
    );
  }
}

export default Missions;
