import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('returns the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });
});

describe('getFooterCopy', () => {
  it('returns "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('returns "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('returns the urgent requirement string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
