function Accordian({
  outerContent,
  innerContent,
  isActive,
  setAccordianState,
  index,
  accordianState,
}) {
  return (
    <div className="accordian__component">
      <div
        className="accordian__outer-container"
        onClick={() => {
          console.log("as", accordianState);
          if (accordianState === index + 1) setAccordianState(0);
          else setAccordianState(index + 1);
        }}
      >
        <p className="accordian__outer-content">{outerContent}</p>
        {isActive ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 11V13H19V11H5Z" fill="black" />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
          </svg>
        )}
      </div>
      {isActive && <p className="accordian__inner-content">{innerContent}</p>}
    </div>
  );
}

export default Accordian;
