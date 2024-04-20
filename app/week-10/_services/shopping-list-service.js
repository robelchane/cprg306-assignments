import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteItem } from "firebase/firestore";

export async function getItems(userId) {
    const postSnapshot = await getDocs(collection(db, `users/${userId}/items`));
    return postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  
  export async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
  }
  
  export async function deleteItem(userId, itemId) {
    await deleteDoc(doc(db, `users/${userId}/items/${itemId}`));
  }