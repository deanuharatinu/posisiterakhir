import { State } from "@/app/lib/actions";
import { createNewArticle } from "@/app/lib/data";
import { Article } from "@/app/lib/models/article.model";

export async function createArticle(prevState: State, formData: FormData): Promise<State> {
  const title = formData.get('articleTitle') as string
  const content = formData.get('articleContent') as string
  const slug = formData.get('articleSlug') as string
  const published = formData.get('articlePublished') !== null

  if (title == "" || content == "" || slug == "" || published == null) {
    return {
      success: false,
      errors: "all form must be filled"
    }
  }

  const article: Article = {
    title: title,
    content: content,
    slug: slug,
    published: published,
  }

  const result = await createNewArticle(article)
  if (!result) {
    return {
      success: false,
      errors: "error occured"
    }
  }

  return {
    success: true
  }
}