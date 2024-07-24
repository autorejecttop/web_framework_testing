export default function MyButton({
  count,
  onClick,
}: {
  count: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
