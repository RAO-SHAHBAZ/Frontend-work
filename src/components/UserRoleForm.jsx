import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ReactSelect from "react-select"; // Import react-select

const moduleOptions = [
  { value: "dashboard", label: "Dashboard" },
  { value: "reports", label: "Reports" },
  { value: "settings", label: "Settings" },
];

const categoryOptions = [
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "support", label: "Support" },
];

const UserRoleForm = () => {
  return (
    <Card className="max-w-lg mx-auto mt-10 shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">User Role Management</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Select User */}
          <div>
            <Label>Select User</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose a user" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user1">User 1</SelectItem>
                <SelectItem value="user2">User 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Department */}
          <div>
            <Label>Select Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Module Permissions (Multi-Select) */}
          <div>
            <Label>Module Permissions</Label>
            <ReactSelect
              isMulti
              options={moduleOptions}
              placeholder="Select modules"
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>

          {/* Category Permissions (Multi-Select) */}
          <div>
            <Label>Category Permissions</Label>
            <ReactSelect
              isMulti
              options={categoryOptions}
              placeholder="Select categories"
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>

          {/* Submit Button */}
          <Button className="w-full">Save Role</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserRoleForm;
