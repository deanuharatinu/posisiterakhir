'use server'

import { deleteArticleById } from "@/app/data/data"
import { revalidatePath } from "next/cache"

export async function deleteArticle(id: string) {
  const result = await deleteArticleById(id)
  if (!result) {
    console.log("error")
  }

  revalidatePath('/admin/articles', 'page')
}