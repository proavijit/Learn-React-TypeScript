import { GreetProps } from "./Greet.types";

const Greet = (props: GreetProps) => {
  return (
    <div>
      <>
        <h2>{props.isLogin ? `"Welcome  ${props.name}"` : "Welcome Gust"}</h2>
        Hi i am {props.name}  and my age is {props.age}
      </>
    </div>
  );
};

export default Greet;