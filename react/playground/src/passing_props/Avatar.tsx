interface Person {
  name: string;
  imageId: string;
}

interface AvatarProps {
  person: Person;
  size: number;
}

function getImageUrl(person: Person, size = "s") {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}

export default function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
