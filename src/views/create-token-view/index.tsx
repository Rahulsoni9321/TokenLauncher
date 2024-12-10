"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadImage from "./components/upload-image";

const tokenSchema = z.object({
  name: z.string().min(1, "Token name is required"),
  ticker: z.string().min(1, "Ticker symbol is required"),
  description: z.string().min(1, "Description is required"),
});

type TokenFormData = z.infer<typeof tokenSchema>;

const CreateTokenView = () => {
  const form = useForm<TokenFormData>({
    resolver: zodResolver(tokenSchema),
  });

  const onSubmit = (data: TokenFormData) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <UploadImage setUrl={() => {}} />
          </div>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="Token Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="ticker"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ticker Symbol</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="Ticker Symbol" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Create Token</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateTokenView;
