import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <React.Fragment>
        <div className={`menuItem ${css(styles.menuItem)}`}>
          <p className={css(styles.menuItemText)}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.notifications)}`}>
            <button
              style={{ float: 'right' }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt="close" />
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.list)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    padding: '6px 12px',
    border: '1px solid #e1e1e1',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  menuItemText: {
    margin: 0,
  },
  notifications: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    width: '250px',
    border: '1px solid #e1e1e1',
    padding: '15px',
    textAlign: 'left',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    '@media (max-width: 900px)': {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    },
  },
  list: {
    '@media (max-width: 900px)': {
      padding: 0,
      fontSize: '20px',
    },
  },
});

export default Notifications;
