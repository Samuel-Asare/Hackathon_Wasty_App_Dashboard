import {
  CreditCard,
  LifeBuoy,
  // Blocks,
  LogOut,
  Plus,
  Settings,
  User,
  Users,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

const handleLogout=()=>{
  localStorage.setItem("user", JSON.stringify("null"));

}

export function DropdownMenuComponent() {
  const user=JSON.parse(localStorage.getItem("user"))
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.setItem("user", JSON.stringify("null"));
    navigate("/login")
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to="/">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Income</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Vendor Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New vendor</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>User Support Requests</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        {user ?
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span onClick={handleLogout}>Logout</span>
        </DropdownMenuItem>
        :(
          <Link to={"/login"}>
          <span>Log In</span>
        </Link>
        )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
