type Props = {
  children: React.ReactNode;
  X?: boolean;
  Y?: boolean;
  className?: string;
};

export default function Span(props: Props) {
  return (
    <>
      <span
        className={`flex ${props.className} ${
          props.X && props.Y
            ? "justify-around items-center"
            : props.X
            ? "justify-around items-start"
            : props.Y
            ? "flex-col justify-around items-start"
            : ""
        } animate`}
      >
        {props.children}
      </span>
    </>
  );
}