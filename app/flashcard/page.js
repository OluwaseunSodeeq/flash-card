"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
// import { Router, useRouter } from "next/router";
import {} from "@mui/material";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useSearchParams } from "next/navigation";

function Flashcard() {
  const [user, isSignedIn, isLoaded] = useUser();
  const [flipped, setFlipped] = useState([]);
  const [flashcard, setFlashcard] = useState([]);

  const SearchParam = useSearchParams();
  const search = SearchParam.get("id");

  useEffect(() => {
    async function getFlashCard() {
      if (!search || !user) return;
      const colRef = collection(doc(collection(db, "users"), user.id), search);
      const docs = await getDocs(colRef);
      const flashcards = [];

      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });

      setFlashcard(flashcards);
    }
    getFlashCard();
  }, [user, search]);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    if (!isLoaded || !isSignedIn) {
      return <></>;
    }
  };
  return (
    <Container maxWidth="100vw">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcard.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Generated Flashcards
            </Typography>
            <Grid container spacing={2}>
              {flashcard.map((flashcard, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardActionArea onClick={() => handleCardClick(index)}>
                      <CardContent>
                        <Box
                          sx={{
                            perspective: "1000px",
                            "&> div": {
                              transition: {
                                transition: "transform 0.6s",
                                transformStyle: "preseerve-3d",
                                position: "relative",
                                width: "100%",
                                height: "200px",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                                transform: flipped(index)
                                  ? "rotateY(180deg)"
                                  : "rotateY(0deg)",
                              },
                              "& > div > div": {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 2,
                                boxSizing: "border-box",
                              },
                              "&> div > div:nth-of-type[2]": {
                                transform: "rotateY(180deg)",
                              },
                            },
                          }}
                        >
                          <div>
                            <div>
                              <Typography variant="h5" component="div">
                                {flashcard.front}
                              </Typography>
                            </div>
                            <div>
                              <Typography variant="h5" component="div">
                                {flashcard.back}
                              </Typography>
                            </div>
                          </div>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sxx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleOpen}
              >
                <DialogTitle>Save Flashcards</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please enter a name for your flashcards collections
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    type="text"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    label="Collection Name"
                    variant="outlined"
                  />
                </DialogContent>
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </Container>
  );
}

export default Flashcard;
