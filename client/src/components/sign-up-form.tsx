"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Input, InputProps } from "./ui/input";
import { Button } from "./ui/button";

import { Eye, EyeOff } from "lucide-react";

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Name is empty!" }),
    lastName: z.string().min(1, { message: "Last name is empty!" }),
    email: z
      .string()
      .min(1, { message: "Email is empty!" })
      .email({ message: "Email is invalid!" }),
    password: z.string().min(1, { message: "Password is empty!" }),
    confirmPassword: z.string().min(1, { message: "Password is empty!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match!",
    path: ["confirmPassword"],
  });

const PasswordInput = (props: InputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex">
      <Input className="pr-9" type={!show ? "password" : "text"} {...props} />
      <div
        onClick={() => setShow((prevState) => !prevState)}
        className="z-1 absolute right-2 self-center rounded-full p-1 hover:cursor-pointer hover:bg-accent"
      >
        {!show ? <Eye size={16} /> : <EyeOff size={16} />}
      </div>
    </div>
  );
};

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name:</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password:</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password:</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button className="text-center" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
