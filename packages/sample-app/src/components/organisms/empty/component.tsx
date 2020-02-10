import { SampleIcon } from 'sample-components';
import React from 'react';

export const EmptyComponent = () => {
  return (
    <div className="sample-empty">
      <div className="sample-empty__panel">
        <SampleIcon icon="inbox" />
        <h3>No Data</h3>
      </div>
    </div>
  );
};

export default EmptyComponent;
