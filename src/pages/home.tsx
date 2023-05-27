import { Counter } from "../components/Counter";
import { styles } from "../style/homeStyles";

export const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home</h1>
      <p>
        This repository can be used with electron configured with react and
        typescript. Hot reloading is already supported.
      </p>
    </div>
  );
};
