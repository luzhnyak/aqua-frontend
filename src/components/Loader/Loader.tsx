import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
          <div className={css.circles}>
          <span  style={{ '--n': 1 } as React.CSSProperties }></span>
          <span style={{ '--n': 2 } as React.CSSProperties }></span>
          <span style={{ '--n': 3 } as React.CSSProperties }></span>
          <span style={{ '--n': 4 } as React.CSSProperties }></span>
          <span style={{ '--n': 5 } as React.CSSProperties }></span>
          <span style={{ '--n': 6 } as React.CSSProperties }></span>
          <span style={{ '--n': 7 } as React.CSSProperties }></span>
          <span style={{ '--n': 8 } as React.CSSProperties}></span>
          <span style={{ '--n': 9 } as React.CSSProperties }></span>
          <span style={{ '--n': 10 } as React.CSSProperties }></span>
          <span style={{ '--n': 11 } as React.CSSProperties }></span>
          <span style={{ '--n': 12 } as React.CSSProperties }></span>
          <span style={{ '--n': 13 } as React.CSSProperties }></span>
          <span style={{ '--n': 14 } as React.CSSProperties }></span>
          <span style={{ '--n': 15 } as React.CSSProperties }></span>
        <span style={{ '--n': 16 } as React.CSSProperties}></span>

        </div>
      </div>
  );
};

export default Loader;
