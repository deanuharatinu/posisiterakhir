export default function ArticleShimmer() {
  return (
    <div className="">
      <div className="animate-pulse space-y-4">
        <div className="h-5 bg-gray-600 rounded w-3/4"></div>
        <div className="h-40 bg-gray-600 rounded-lg"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-600 rounded w-full"></div>
          <div className="h-3 bg-gray-600 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  )
}