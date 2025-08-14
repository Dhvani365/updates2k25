"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";

const formSchema = z.object({
  eventId: z.string().nonempty("Please select an event"),
});

type FormValues = z.infer<typeof formSchema>;

const events = [
  { name: "avishkaar", value: "66d55fb267e58136c12b3531" },
  { name: "cineverse", value: "66d55fb267e58136c12b3532" },
  {
    name: "man-in-the-middle",
    value: "66d55fb267e58136c12b3533",
  },
  {
    name: "escape-the-room",
    value: "66d55fb267e58136c12b3534",
  },

  {
    name: "brain-o-teaser",
    value: "66d55fb267e58136c12b3535",
  },

  {
    name: "the-resume-relay",
    value: "66d55fb267e58136c12b3536",
  },
  {
    name: "stock-x-stake",
    value: "66d55fb267e58136c12b3537",
  },
  {
    name: "memefest",
    value: "66d55fb267e58136c12b3538",
  },
  {
    name: "human-or-ai",
    value: "66d55fb267e58136c12b3539",
  },
  {
    name: "split-or-steal",
    value: "66d55fb267e58136c12b353a",
  },
  { name: "dataloom", value: "66d55fb267e58136c12b353b" },
];

export default function EventForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventId: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/api/admin/generate-csv",
        { eventId: values.eventId },
        {
          responseType: "blob",
        }
      );

      const filename = response.headers["filename"];

      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="eventId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Event</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an event" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.name} value={event.value}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate CSV"}
        </Button>
      </form>
    </Form>
  );
}
