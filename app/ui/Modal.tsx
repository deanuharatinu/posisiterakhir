'use client'

import { Dispatch, SetStateAction, useState } from "react"
import { ModalAction } from "../utils/providers"

export default function Modal({ modalAction, setModalAction }:
  Readonly<{
    modalAction: ModalAction,
    setModalAction: Dispatch<SetStateAction<ModalAction>>
  }>
) {
  return (
    <dialog
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4 w-screen h-screen"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="max-w-md rounded-lg bg-white p-6">
        <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">
          {modalAction.title}
        </h2>

        <div className="mt-4">
          <p className="text-pretty text-gray-700">
            {modalAction.description}
          </p>
        </div>

        <footer className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
            onClick={() => {
              setModalAction({ isShow: false })
            }}
          >
            {modalAction.negativeButton}
          </button>

          <button
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            onClick={() => {
              modalAction.onPositiveClick?.()
            }}
          >
            {modalAction.positiveButton}
          </button>
        </footer>
      </div>
    </dialog>
  )
}

export function useModal() {
  const [modalAction, setModalAction] = useState<ModalAction>({ isShow: false })

  const ModalComponent = () => {
    return (
      <Modal
        modalAction={modalAction}
        setModalAction={setModalAction}
      />
    )
  }

  return {
    modalAction,
    setModalAction,
    Modal: ModalComponent,
  }
}