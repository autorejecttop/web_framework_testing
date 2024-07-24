export default function Main() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div onClickCapture={() => alert("div clicked")}>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

function PlayButton({ movieName }: { movieName: string }) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handleClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
