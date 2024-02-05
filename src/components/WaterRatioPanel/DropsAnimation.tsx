import css from "./DropsAnimation.module.css";
import { ReactComponent as Circle } from "../../images/drops/circle.svg";
import { ReactComponent as Drop } from "../../images/drops/drop.svg";

const Drops = () => { 
    return (
      <div
    >
      <Drop className={css.raindrop1} />
      <Drop className={css.raindrop2} />
      <Drop className={css.raindrop3} />
      <Drop className={css.raindrop4} />
      <Drop className={css.raindrop5} />
      <Circle className={css.circle1} />
      <Circle className={css.circle2} />
      <Circle className={css.circle3} />
    </div>  
    );
};

export default Drops;
