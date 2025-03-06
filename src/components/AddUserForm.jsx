import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddUserForm = () => {
  return (
    <Card className="max-w-lg mx-auto mt-10 shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Add User</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Username */}
          <div>
            <Label>Username</Label>
            <Input placeholder="Enter username" />
          </div>

          {/* Password */}
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter password" />
          </div>

          {/* Email (Optional) */}
          <div>
            <Label>Email (Optional)</Label>
            <Input type="email" placeholder="Enter email" />
          </div>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First Name</Label>
              <Input placeholder="First name" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input placeholder="Last name" />
            </div>
          </div>

          {/* Address Fields */}
          <div>
            <Label>Address Line 1</Label>
            <Input placeholder="Enter Address Line 1" />
          </div>

          <div>
            <Label>Address Line 2 (Optional)</Label>
            <Input placeholder="Enter Address Line 2" />
          </div>

          <div>
            <Label>City</Label>
            <Input placeholder="Enter city" />
          </div>

          <div>
            <Label>Province/State</Label>
            <Input placeholder="Enter province/state" />
          </div>

          <div>
            <Label>Country</Label>
            <Input placeholder="Enter country" />
          </div>

          <div>
            <Label>Postal Code</Label>
            <Input placeholder="Enter postal code" />
          </div>

          {/* Submit Button */}
          <Button className="w-full">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddUserForm;
