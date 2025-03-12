import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Alibaba.com. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ddd',
    marginTop: '20px',
  },
};

export default Footer;