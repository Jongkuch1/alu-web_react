import PropTypes from 'prop-types';

function NotificationItem({ id, type, html, value, markAsRead }) {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
