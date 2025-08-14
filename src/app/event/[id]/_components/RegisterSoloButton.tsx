"use client";
import { Button } from "../../../../components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "../../../../components/ui/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";

type Props = {};

const RegisterSoloButton = ({
  eventId,
  isAlredyRegister,
  isDetailsAvailable,
}: {
  eventId: string;
  isAlredyRegister: boolean;
  isDetailsAvailable: boolean;
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const handleSoloRegistration = async () => {
    if (eventId == "66d55fb267e58136c12b353c") {
      window.location.href = "https://www.codewinglet.com/event-form";
      return;
    }
    if (status == "authenticated") {
      if (!isDetailsAvailable) {
        router.push("/user-details");
        return toast({
          title: "Please submit your details!",
          variant: "destructive",
          description: "After submiting your details you can participate!",
          duration: 1500,
        });
      }
      try {
        setIsLoading(true);
        const response = await axios.post(
          `/api/event/${eventId}/solo-registration`,
          {
            eventId: eventId,
          }
        );
        setIsLoading(false);
        router.refresh();
        console.log(response);
        return toast({
          title: response.data.message,
          description: "You can start participation now",
          duration: 1500,
        });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        return toast({
          title: "Something went wrong",
          variant: "destructive",
          description: "You can start participation now",
          duration: 1500,
        });
      }
    } else {
      const callbackUrl = encodeURIComponent(window.location.href);
      router.push(`/signin?callbackUrl=${callbackUrl}`);
    }
  };
  return (
    <Button
      onClick={handleSoloRegistration}
      disabled={isAlredyRegister || isLoading}
      className="flex items-center gap-2 max-md:w-full"
    >
      {isAlredyRegister ? (
        <>
          <CheckCircle className="text-green-100" /> Already Registered
        </>
      ) : isLoading ? (
        <Loader2 className="size-5 animate-spin text-foreground/75 " />
      ) : (
        "Register"
      )}
    </Button>
  );
};

export default RegisterSoloButton;
