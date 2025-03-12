
type ContainerProps = {
  styles: React.CSSProperties
}

const Container = (props: ComponentProps) => {
  return (
    <div style={props.styles}>
      Inner
    </div>
  );
};

export default Container;