export default function ResumeCard({ resumeData }: Readonly<{ resumeData?: { company?: string, role?: string, year?: string }[] }>) {
  return (
    <div className="flex flex-col border-1 border-zinc-700/40 rounded-xl p-6">
      <div className="flex flex-row gap-3 items-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none">
          <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100/10 stroke-zinc-500"></path>
          <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className="stroke-zinc-500"></path>
        </svg>
        <h2 className="text-sm font-bold">
          Resume
        </h2>
      </div>
      {
        resumeData &&
        <div className="flex flex-col mt-6 gap-4">
          {resumeData.map((resumeItem) => {
            return (
              <ResumeItem key={resumeItem.company} resumeItem={resumeItem} />
            );
          })}
        </div>
      }

      <button className="group text-sm bg-zinc-800/50 py-3 mt-6 rounded-lg cursor-pointer hover:bg-zinc-800 transition duration-100 inline-flex items-center justify-center gap-2">
        Download Resume <span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50">
            <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
            </path></svg></span>
      </button>

    </div>
  )
}

function ResumeItem({ resumeItem }: Readonly<{ resumeItem: { company?: string, role?: string, year?: string } }>) {
  return (
    <div>
      <h3 className="text-sm lg:max-w-50">{resumeItem.company}</h3>
      <div className="flex flex-row justify-between text-sm text-zinc-500/90 mt-1">
        <h4 className="flex-3">{resumeItem.role}</h4>
        <p className="flex-auto text-right">{resumeItem.year}</p>
      </div>
    </div>
  );
}