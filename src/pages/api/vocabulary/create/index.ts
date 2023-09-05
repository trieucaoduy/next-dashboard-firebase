import { IVocabulary } from '@/common/types'
import { db } from '@/libs/firebase'
import { FirebaseError } from 'firebase/app'
import { addDoc, collection } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req?.body as IVocabulary

  try {
    const vocabularyRef = collection(db, 'vocabulary')
    const responseDoc = await addDoc(vocabularyRef, body)

    res.send({ success: true, message: 'Create successful', data: responseDoc.id })
  } catch (error) {
    if (error instanceof FirebaseError) res.status(400).json({ message: error.message })
  }
}
