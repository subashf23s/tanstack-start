import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import Input from "@/components/ui/input";

const LoginPage = () => {
  return (
    <main className="container mx-auto py-8 grid place-content-center">
      <Card>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" placeholder="Email" />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </Field>
            <Button>Login</Button>
          </FieldGroup>
        </form>
      </Card>
    </main>
  );
};

export default LoginPage;
