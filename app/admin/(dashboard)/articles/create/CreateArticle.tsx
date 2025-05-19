'use client'

import { State } from "@/app/lib/actions";
import ArticleForm from "@/app/ui/ArticleForm";
import { ModalAction, ModalContext } from "@/app/utils/providers";
import { useRouter } from "next/navigation";
import { startTransition, useActionState, useContext, useEffect } from "react";
import { createArticle } from "./actions";

export default function CreateArticle() {
  const { setModalAction } = useContext(ModalContext);
  const router = useRouter()

  const initialState: State = { message: null }
  const [state, formAction] = useActionState(createArticle, initialState)

  const handleModalPositiveClick = (formData: FormData) => {
    startTransition(() => {
      formAction(formData)
    })

    setModalAction({ isShow: false })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const modalAction: ModalAction = {
      isShow: true,
      title: "Are you sure want to create new article?",
      description: "Article with title: " + formData.get('articleTitle') + ", will be created.",
      positiveButton: "Create",
      negativeButton: "Cancel",
      onPositiveClick: () => handleModalPositiveClick(formData)
    }

    setModalAction(modalAction)
  }

  useEffect(() => {
    if (state.success) {
      router.replace('/admin/articles')
    } else if (state.errors) {
      alert(state.errors)
    }

  }, [state, router])

  return (
    <ArticleForm onSubmit={handleSubmit} />
  )
}