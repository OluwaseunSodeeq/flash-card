"use client";
import { SignedIn, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Router, useRouter } from "next/router";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function FlashCards() {
  const [flashcards, setFlashcards] = useState([]);
  const [user, isSignedIn, isLoaded] = useUser();
  //   const [flipped, setFlipped] = useState([]);

  const router = useRouter();
  useEffect(() => {
    async function getFlashCards() {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        setFlashcards(collections);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashCards();
  }, [user]);

  if (!isLoaded || !SignedIn) {
    return <></>;
  }
  const handleCardClick = (id) => {
    router.push[`/flashcard?id=${id}`];
  };
  return (
    <Container maxWidth="100vw">
      <Grid
        container
        spacing={3}
        sx={{
          mt: 4,
        }}
      >
        {flashcards.map((flashcard, index) => {
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={handleCardClick}>
                <CardContent>
                  <Typography variant="h6">{flashcard.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            ;
          </Grid>;
        })}
      </Grid>
    </Container>
  );
}

export default FlashCards;
