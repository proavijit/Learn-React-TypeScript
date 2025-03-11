type StatusProps = {
  status: 'loading' | 'success' | 'error'
}


const Status = (props: StatusProps) => {

  const statusMessages = {
    loading: 'loading......',
    success: 'data fetched successfully',
    error: 'error fetching data'
  };

  const message = statusMessages[props.status] || 'Chacked Status...';

  return (
    <div>
      Status - {message}
    </div>
  );
};

export default Status;