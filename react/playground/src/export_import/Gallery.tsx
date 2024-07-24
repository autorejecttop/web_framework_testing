import { Profile } from "./Profile";

export const Gallery = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
};
