import { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserRoleForm from "./components/UserRoleForm";
import { Button } from "@/components/ui/button";

function App() {
  const [activeForm, setActiveForm] = useState("addUser");

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-center space-x-4 mb-6">
        <Button
          variant={activeForm === "addUser" ? "default" : "outline"}
          onClick={() => setActiveForm("addUser")}
        >
          Add User
        </Button>
        <Button
          variant={activeForm === "userRole" ? "default" : "outline"}
          onClick={() => setActiveForm("userRole")}
        >
          User Role Management
        </Button>
      </div>

      {activeForm === "addUser" ? <AddUserForm /> : <UserRoleForm />}
    </div>
  );
}

export default App;
