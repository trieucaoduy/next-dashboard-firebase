import { doc, setDoc } from "firebase/firestore"
import { db } from '../libs/firebase'

interface IUserSignup {
  id: string
  fullName: string
  email: string
  authorized?: any
}

export const signUp = async (user: IUserSignup) => {
  try {
    await setDoc(doc(db, 'users', user?.id), user)
  } catch (err) {
    console.error(err)
  }
}