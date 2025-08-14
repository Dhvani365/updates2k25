"use client";

import { Button } from "../../../../components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import googleLogo from "@/assets/google-icon.svg";
import { cn } from "../../../../lib/utils";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const SiginInButton = ({
  className,
  text,
  buttonVariant,
}: {
  className?: string;
  text: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/user-details";

  const [isLoading, setIsLoading] = useState(false);
  const handleSignIn = async () => {
    setIsLoading(true);
    const user = await signIn("google", { callbackUrl: callbackUrl });
    setIsLoading(false);
  };
  return (
    <Button
      type="submit"
      onClick={handleSignIn}
      variant={buttonVariant || "default"}
      disabled={isLoading}
      className={cn(className, "flex gap-4 items-center")}
    >
      <Image src={googleLogo} alt={"Google logo"} width={20} height={20} />
      {isLoading ? <Loader2 className="size-5 animate-spin" /> : text}
    </Button>
  );
};

export default SiginInButton;
