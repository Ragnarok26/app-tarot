import firebase from '../lib/firebase'

export const getContentFromFirestore = async (lang) => {
  return await firebase
    .firestore()
    .collection(lang)
    .doc('web')
    .get()
    .then(doc => ({
      ...doc.data(),
    }));
}

export const getPathsFromFirestore = async () => {
  return await firebase
    .firestore()
    .collection('paths')
    .doc('web')
    .get()
    .then(doc => ({
      ...doc.data(),
    }));
}