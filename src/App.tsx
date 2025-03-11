import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Optionsl from "./components/Optional";
import Oscor from "./components/Oscor";
import Persion from "./components/Persion";
import PersionList from "./components/PersionList";
import Status from "./components/Status";

const App = () => {
  const persionName = {
    first: "Bruce",
    last: "Waynce"
  }

  const persionList = [
    {
      first: "Robart",
      last: "Boosh"
    },
    {
      first: "Dell",
      last: "Carnagy"
    },
    {
      first: "Necola",
      last: "Tesla"
    }
  ]

  return (
    <div>
      <Button handleClick={() => console.log("Button Clicked.")} />
      <Optionsl username="alex01" messageCount={25} message="Hay Alex How Are You" />
      <Heading>This is Heading</Heading>
      <Greet age={27} name='Avijit Ghosh' isLogin={true} />
      <Persion name={persionName} />
      <PersionList names={persionList} />
      <Status status="success" />
      <Oscor>
        <Heading>This is Oscor Children Heading</Heading>
      </Oscor>
    </div>
  );
};

export default App;