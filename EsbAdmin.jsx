// @flow
import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import classNames from 'classnames';

import EsbService from './EsbService';
import environment from './Environment';

const mockServices = [
  { name: 'Service Name A', address: 'http://iis07/apps/s1.svc', sla: 2},
  { name: 'Service Name B', address: 'http://iis07/apps/s2.svc', sla: 1.3}
];

const servicesQuery = graphql`
  query EsbAdminQuery {
    services {
      id
      name
      address
      sla
    }
  }
`;

type Props = {
};

type State = {
  servicePanelVisible: boolean
}

class EsbAdmin extends React.Component<Props, State> {

  // state = {
  //   servicePanelVisible: false
  // };

  constructor() {
    super();

    this.state = {
      servicePanelVisible: false
    };

    this._addService = this._addService.bind(this);
    this._openServicePanel = this._openServicePanel.bind(this);
    this._closeServicePanel = this._closeServicePanel.bind(this);
  }

  _addService() {
    // TBD
    console.log('Adding new service');

    this.setState({
        servicePanelVisible: false
    })

  }

  _openServicePanel() {

    this.setState({
      servicePanelVisible: true
    })
  }

   _closeServicePanel() {

    this.setState({
        servicePanelVisible: false
    })
  }

  renderServicesList({error, props, retry}) {
    if( error )
      return <div>Error</div>;

    if( !props ) {
      return <div>Loading...</div>
    }

    return (<div className="media-list-body bg-white b-1">{
              props.services.map( (service, index) => {
                return <EsbService key={index} {...service} />
              } )
            }</div>)
  }

  render() {

    var servicePanelClass = classNames('quickview', 'quickview-lg', {
      'reveal': this.state. servicePanelVisible
    });


    return (<main className="main-container maxHeight">
                <div className="main-content maxHeight">
                  <div className="media-list media-list-divided media-list-hover">
                    <header className="flexbox align-items-center media-list-header bg-transparent b-0 py-16 pl-20">
                      <div className="flexbox align-items-center">
                      </div>
                    </header>
                    <QueryRenderer
                        environment={environment}
                        query={servicesQuery}
                        variables={{}}
                        render={this.renderServicesList}/>
                  </div>
                </div>
                <div className="fab fab-fixed">
                 <a className="btn btn-float btn-primary" onClick={this._openServicePanel}>
                   <i className="ti-plus"></i>
                 </a>
                </div>
                <div className={servicePanelClass}>
                  <header className="quickview-header">
                    <p className='quickview-title lead fw-400'>Add new service</p>
                    <span onClick={this._closeServicePanel}>
                      <i className="ti-close"></i>
                    </span>
                  </header>
                  <div className="quickview-body ps-container ps-theme-default ps-active-y">
                    <div className="quickview-block form-type-material">
                      <h6>Service Details</h6>
                      <div className="form-group">
                        <input type="text" className="form-control" />
                        <label>Name</label>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" />
                        <label>Address (URL)</label>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" />
                        <label>Expected SLA</label>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" />
                        <label>Affiliated System</label>
                      </div>

                    </div>
                  </div>
                  <footer className="p-12 text-right">
                    <button className="btn btn-flat btn-primary"
                      onClick={this._addService}>Add service</button>
                  </footer>
                </div>
            </main>
         );

  }

};

export default EsbAdmin;
