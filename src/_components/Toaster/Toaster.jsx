import { Toaster } from 'react-hot-toast';

const ToasterComponent = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          backgroundColor: 'var(--bg-elements)',
          color: '#fff',
          textTransform: 'capitalize',
          margin: '5px 0',
          fontFamily: 'sans-serif',
        },
        icon: '✔️',
      }}
    />
  );
};

export default ToasterComponent;
