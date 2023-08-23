import {FormPatch, PatchEvent} from 'sanity'
import {StateCreator} from 'zustand'

type SanityPatchType = (patch: FormPatch | FormPatch[] | PatchEvent) => void
const DRAFTS_PREFIX = 'drafts.'

export interface SanitySlice {
  documentID?: string
  sanityPatch?: SanityPatchType
  setDocumentID: (documentID: string) => void
  setSanityPatch: (sanityPatch: SanityPatchType) => void
}

export const createSanitySlice: StateCreator<SanitySlice, [], [], SanitySlice> = (set) => ({
  setDocumentID: (documentID: string) =>
    set(() => {
      const draftDocumentID = documentID.startsWith(DRAFTS_PREFIX)
        ? documentID
        : `${DRAFTS_PREFIX}${documentID}`
      return {documentID: draftDocumentID}
    }),
  setSanityPatch: (sanityPatch: SanityPatchType) => set((s) => ({sanityPatch})),
})
