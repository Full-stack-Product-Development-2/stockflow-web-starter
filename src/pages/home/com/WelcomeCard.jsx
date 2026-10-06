import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function WelcomeCard() {
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Welcome to StockFlow</CardTitle>
        <CardDescription>Starting point for the dashboard build</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        The layout, sidebar and login page are ready. Follow the activity
        document to add routing and the four Stock Manager pages.
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;
