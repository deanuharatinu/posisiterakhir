'use client'

import { createContext, Dispatch, SetStateAction, useMemo } from "react"
import { useModal } from "../ui/Modal"

export type ModalAction = {
  isShow: boolean;
  title?: string,
  description?: string,
  positiveButton?: string,
  negativeButton?: string,
  onPositiveClick?: () => void
};

export const ModalContext = createContext<{
  setModalAction: Dispatch<SetStateAction<ModalAction>>
}>({
  setModalAction: () => { },
})

export default function ModalProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { modalAction, setModalAction, Modal } = useModal()

  const contextValue = useMemo(() => ({ setModalAction }), [setModalAction]);

  return (
    <ModalContext.Provider value={contextValue}>
      {modalAction.isShow && <Modal />}
      {children}
    </ModalContext.Provider>
  )
}