import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginFn } from "@/util/functions/login";
import { useNavigate } from "@tanstack/react-router";
// import { signUpFn } from "@/util/functions/signup";
import { useServerFn } from "@tanstack/react-start";
import { FormEvent } from "react";

const LoginPage = () => {
  const submit = useServerFn(loginFn);
  // const signup = useServerFn(signUpFn);
  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    try {
      const response = await submit({ data });
      if (response.success) {
        navigate({ to: "/dashboard" });
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <section className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <Card>
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
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
                    <Button type="submit">Login</Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
