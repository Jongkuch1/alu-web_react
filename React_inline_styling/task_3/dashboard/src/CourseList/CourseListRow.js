import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.headerRow : styles.row;
  const cellStyle = isHeader
    ? [styles.cell, styles.headerCell]
    : styles.cell;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(rowStyle)}>
          <th className={css(cellStyle)} colSpan={2}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={css(rowStyle)}>
        <th className={css(cellStyle)}>{textFirstCell}</th>
        <th className={css(cellStyle)}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={css(rowStyle)}>
      <td className={css(cellStyle)}>{textFirstCell}</td>
      <td className={css(cellStyle)}>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  cell: {
    border: '1px solid #e1e1e1',
    padding: '8px 12px',
  },
  headerCell: {
    backgroundColor: '#f5f5f5',
  },
});

export default CourseListRow;
