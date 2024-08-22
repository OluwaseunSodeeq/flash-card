// "use client";
import { SignIn } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function SignedInPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static" sx={{ background: "#3f5178" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FlashCard
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in ">Log in</Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-up ">Sign up</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4">Sign In</Typography>

        <SignIn />
      </Box>
    </Container>
  );
}
