import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ScrapTechStackForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const accountIds = formData.get("accountIds") as string;
    console.log(accountIds);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Scrap Tech Stack (from a list of account ids)</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            name="accountIds"
            className="w-full text-white resize-none"
            placeholder="Comma separated account ids"
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full">Search and Scrap</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
