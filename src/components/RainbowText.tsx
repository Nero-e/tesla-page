interface RainbowTextProps {
  textClass?: string;
  text?: string;
}

const RainbowText = ({ textClass, text }: RainbowTextProps) => {
  return (
    <>
      <h1
        className={`animate-text ${
          textClass ?? "text-base"
        } text-4xl bg-gradient-to-r from-non-photo-blue via-electric-indigo to-raspberry bg-clip-text text-transparent font-black`}
      >
        {text}
      </h1>
    </>
  );
};

export default RainbowText;
