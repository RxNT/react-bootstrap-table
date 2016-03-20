import React from 'react';
import MouseEventTable from './mouse-event-table';
import TableInTabs from './table-in-tabs';
import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'Mouse Event Table Example)' }>
          <h5>Source in /examples/js/advance/mouse-event-table.js</h5>
          <h5>See event ouput in browser console</h5>
          <MouseEventTable/>
        </Panel>
        <Panel header={ 'Table in Tabs Example)' }>
          <h5>Source in /examples/js/advance/table-in-tabs.js</h5>
          <h5>react-bootstrap-table in tabs</h5>
          <TableInTabs/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;