import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
  return (
    <React.Fragment>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{ float: 'right' }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="close" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
