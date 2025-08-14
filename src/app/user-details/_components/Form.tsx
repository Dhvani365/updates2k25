"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import axios from "axios";
import { Combobox } from "../../../components/ui/combobox";
import { Input } from "../../../components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "../../../components/ui/use-toast";
import { useRouter } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  department: z.string(),
  year: z.string().max(1),
  semester: z.string().max(1),
  phoneNumber: z.string().length(10),
  enrollmentNo: z.string(),
});

const DetailForm = ({ userDetails }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      department: userDetails?.department || "",
      enrollmentNo: userDetails?.enrollmentNo || "",
      phoneNumber: userDetails?.phoneNumber || "",
      semester: userDetails?.semester || "",
      year: userDetails?.year || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      setIsLoading(true);
      const response = await axios.post("/api/user-detail", values);
      console.log(response);
      setIsLoading(false);
      toast({
        title: response.data.message,
        description: "You can start participation now",
        duration: 1500,
      });
      return router.push("/events");
    } catch (error) {
      console.log(error);
      toast({
        title: "something went wrong!",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-6 bg-card max-w-7xl mx-auto w-full col-span-4 bg-gradient-to-br from-slate-900/30 to-violet-900/20 rounded-lg border border-violet-400/70"
      >
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel className="ml-1">Select the year you are in</FormLabel>
              <FormControl>
                <Combobox
                  options={["1", "2", "3", "4"]}
                  {...field}
                  label="Select Year"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel className="ml-1">Select your department</FormLabel>
              <FormControl>
                <Combobox
                  options={[
                    "CO",
                    "IT",
                    "MH",
                    "CL",
                    "AIDS",
                    "IC",
                    "CH",
                    "EL",
                    "EC",
                    "MCA",
                    "TT",
                    "IMCA",
                  ]}
                  {...field}
                  label="Select Department"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="semester"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel className="ml-1">Select your semester</FormLabel>
              <FormControl>
                <Combobox
                  options={["1", "2", "3", "4", "5", "6", "7", "8"]}
                  {...field}
                  label="Select Semester"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="9897865668"
                  inputMode="numeric"
                  {...field}
                  className="max-w-xs"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="enrollmentNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enrollment No.</FormLabel>
              <FormControl>
                <Input
                  placeholder="ET20BTCO001"
                  {...field}
                  className="max-w-xs"
                />
              </FormControl>
              <FormMessage>
                If you don&apos;t have then you can enter your Roll number
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="flex gap-1 items-center max-md:w-full"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="size-5 animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default DetailForm;
