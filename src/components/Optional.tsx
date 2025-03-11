type OptionalProps = {
  username: string,
  messageCount?: number,
  message: string

}
const Optionsl = (props: OptionalProps) => {
  const { messageCount = 100 } = props;
  return (
    <div className="border border-indigo-600 ">
      <div>Username:{props.username}</div>
      <div>MessageCount:{messageCount}</div>
      <div> Message:{props.message}</div>
    </div>
  );
};

export default Optionsl;