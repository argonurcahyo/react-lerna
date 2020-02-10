import { SampleIcon } from 'sample-components';
import React from 'react';

export const EmptyTabComponent = () => {
  return (
    <div className="sample-empty-tab">
      <div className="sample-empty-tab__panel">
        <SampleIcon icon="inbox" />
        <h3>No Data</h3>
      </div>
    </div>
  );
};

export default EmptyTabComponent;
