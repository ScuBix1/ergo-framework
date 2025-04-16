import { Button } from "@/components/ui/button";
import SelectName from "../components/SelectName/SelectName";
import Header from "@/components/Header";

const students = [
  {
    firstname: "bastian",
    lastname: "monnin",
  },
  {
    firstname: "bastian",
    lastname: "monnin",
  },
  {
    firstname: "bastian",
    lastname: "monnin",
  },
  {
    firstname: "bastian",
    lastname: "monnin",
  },
  {
    firstname: "bastian",
    lastname: "monnin",
  },
  {
    firstname: "bastian",
    lastname: "monnin",
  },
];

function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-green-400">Home Page</h1>
      <SelectName tabStudents={students} />
      <Button variant="outline">Button</Button>
    </div>
  );
}

export default Home;
