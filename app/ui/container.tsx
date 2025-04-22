function OuterContainer({ className = '', children }: Readonly<{ className?: string, children: React.ReactNode }>) {
  return (
    <div className={`flex sm:px-8 justify-center ${className}`}>
      <div className="flex w-full max-w-7xl lg:px-8">
        {children}
      </div>
    </div>
  );
}

function InnerContainer({ className = '', children }: Readonly<{ className?: string, children: React.ReactNode }>) {
  return (
    <OuterContainer>
      <div className={`w-full flex justify-center ${className}`}>
        <div className="w-full mx-4 max-w-2xl sm:mx-7.5 md:mx-12 lg:max-w-5xl">
          {children}
        </div>
      </div>
    </OuterContainer>
  )
}

export { OuterContainer, InnerContainer };