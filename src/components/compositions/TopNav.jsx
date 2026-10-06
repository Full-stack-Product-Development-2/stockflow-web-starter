import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

function TopNav() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center gap-2 border-b bg-background px-6">
      <h1 className="font-semibold text-foreground">Dashboard</h1>

      <div className="ml-auto">
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </header>
  );
}

export default TopNav;
