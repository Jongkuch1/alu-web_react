import React from 'react';

function WithLogging(WrappedComponent) {
  const name = WrappedComponent.name || 'Component';

  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${name})`;

  return WithLoggingComponent;
}

export default WithLogging;
