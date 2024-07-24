interface ClockProps {
  color: string;
  time: string;
}

export default function Clock({ color, time }: ClockProps) {
  return <h1 style={{ color }}>{time}</h1>;
}
