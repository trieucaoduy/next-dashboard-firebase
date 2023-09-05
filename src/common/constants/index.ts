export const drawerWidth = 240

export const ROUTER = Object.freeze({
  AUTH: ['/auth', '/auth/signin', '/auth/signup']
})

export const STORAGE_KEY = Object.freeze({
  AUTH_TOKEN: 'auth-token'
})

export const LEVEL_VOCABULARY = [
  {
    value: 'beginer',
    label: 'Beginer'
  },
  {
    value: 'intermediate',
    label: 'Intermediate'
  },
  {
    value: 'advanced',
    label: 'Advanced'
  },
  {
    value: 'proficency',
    label: 'Proficency'
  }
]

export const TYPES_OF_WORD = [
  { value: 'noun', label: 'Noun' },
  { value: 'verb', label: 'Verb' },
  { value: 'adjective', label: 'Adjective' },
  { value: 'adverb', label: 'Adverb' },
  { value: 'phrasalVerb', label: 'Phrasal verb' },
  { value: 'slang', label: 'Slang' },
  { value: 'other', label: 'Other' }
]
