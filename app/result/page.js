"use client";

import getStripe from "@/utils/get-stripe";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";

function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCheckoutSession = async () => {
      if (!session_id) return;

      try {
        const res = await fetch(
          `/api/checkout_session?session_id=${session_id}`
        );
        const sessionData = await res.json();
        if (res.ok) {
          setSession(sessionData);
        } else {
          setError(sessionData.error);
        }
      } catch (err) {
        setError("An error occured");
      } finally {
        setLoading(false);
      }
    };
    fetchCheckoutSession();
  }, [session_id]);

  if (loading) {
    <Container maxWidth="100vw" sx={{ textAlign: "center", mt: 4 }}>
      <CircularProgress />
      <Typography variant="h4">Loading ...</Typography>
    </Container>;
  }
  if (error) {
    <Container maxWidth="100vw" sx={{ textAlign: "center", mt: 4 }}>
      <CircularProgress />
      <Typography variant="h6">error</Typography>
    </Container>;
  }
  return (
    <Container maxWidth="100vw" sx={{ textAlign: "center", mt: 4 }}>
      {session.payment_status === "paid" ? (
        <>
          <Typography variant="h4">Thank u for Purchasing</Typography>
          <Box sx={{ mt: 22 }}>
            <Typography variant="h6">
              Session ID: {session_id}Payment successfull!
            </Typography>
            <Typography variant="body1">
              we have received your payment. You will receive an email shortly
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h4">Payment failed!</Typography>
          <Box sx={{ mt: 22 }}>
            <Typography variant="body1">
              Payment was not successful .Pls Try again!
            </Typography>
          </Box>
        </>
      )}
    </Container>
  );
}

export default ResultPage;
