import React from 'react';
import { useHistory } from 'react-router-dom';

function RedirectToDetail({ productId }) {
  const history = useHistory();

  const handleRedirect = () => {
    localStorage.setItem('productId', productId);
    history.push('/detail');
  };

  React.useEffect(() => {
    handleRedirect();
  }, []);

  return null;
}

export default RedirectToDetail;