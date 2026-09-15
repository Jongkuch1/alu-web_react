import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <p style={{ margin: 0 }}>
      Copyright {getFullYear()} - {getFooterCopy(false)}
    </p>
  );
}

export default Footer;
