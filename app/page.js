import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Container container="100vw">
      <Head>
        <title>Flashcard</title>
        <meta name="description" content="Create flashcard from text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mr: 2 }}
          href="/generate"
        >
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Box>
      {/*  */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography>Easy Text input</Typography>
            <Typography>
              Simply input text and let our software do the rest
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>Smart Flashcards</Typography>
            <Typography>
              Our Ai intelligently breaks down your text into concise
              flashcards, perfect for studying
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>Accesibility Anywhere</Typography>
            <Typography>
              Access your Flashcards from any devices at any time. Study on the
              go with ease{" "}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>Accesibility Anywhere</Typography>
            <Typography>
              Access your Flashcards from any devices at any time. Study on the
              go with ease{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6">$5 / monthly</Typography>
              <Typography>
                Access to basic flashcard feature and limited storage
              </Typography>
              <Button varaiants="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6">$15 / monthly</Typography>
              <Typography>
                Unlimited flashcards and storage with prioirty support
              </Typography>
              <Button varaiants="contained" color="primary" sx={{ mt: 2 }}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
