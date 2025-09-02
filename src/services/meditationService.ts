import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: number;
  category: "ALL" | "SLEEP" | "ANXIETY" | "STRESS" | "FOCUS";
  audioUrl: string;
  imageUrl: string;
  instructor: string;
  createdAt: Date;
}

export const getMeditations = async (category: string = "ALL") => {
  try {
    const meditationsRef = collection(db, "meditations");
    let q;

    if (category === "ALL") {
      q = query(meditationsRef, orderBy("createdAt", "desc"));
    } else {
      q = query(
        meditationsRef,
        where("category", "==", category),
        orderBy("createdAt", "desc")
      );
    }

    const querySnapshot = await getDocs(q);
    const meditations: Meditation[] = [];

    querySnapshot.forEach((doc) => {
      meditations.push({ id: doc.id, ...doc.data() } as Meditation);
    });

    return meditations;
  } catch (error) {
    console.error("Error fetching meditations:", error);
    return [];
  }
};
