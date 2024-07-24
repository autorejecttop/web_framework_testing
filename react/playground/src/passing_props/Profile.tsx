import Avatar from "./Avatar";
import Card from "./Card";

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      />
    </Card>
    // <div>
    //   <Avatar
    //     size={100}
    //     person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
    //   />
    //   <Avatar size={80} person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} />
    //   <Avatar size={50} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
    // </div>
  );
}
