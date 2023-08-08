export const AnimatedHeader = ({ headerText, className }) => {
  let animationDelay = 200;
  return (
    <h1 className={className}>
      {headerText.split("").map((letter, i) => {
        if (letter == " ") {
          return <span>&nbsp;</span>
        }
        return (
          <span className="rubberBand" key={i} data-aos="flip-left" data-aos-delay={`${(animationDelay = animationDelay + 100)}`}>
            {letter}
          </span>
        );
      })}
    </h1>
  );
};
