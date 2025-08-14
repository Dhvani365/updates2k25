"use client";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const GroupRegisterButton = ({
  eventId,
  isAuthorised,
}: {
  eventId: string;
  isAuthorised: boolean;
}) => {
  const callbackUrl = encodeURIComponent(window.location.href);
  const link = isAuthorised
    ? `/event/${eventId}/registration`
    : `/signin?callbackUrl=${callbackUrl}`;

  return (
    <Button>
      <Link href={link}>Register group</Link>
    </Button>
  );
};

export default GroupRegisterButton;
