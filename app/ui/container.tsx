function OuterContainer({ className = '', children }: Readonly<{ className?: string, children: React.ReactNode }>) {
  return (
    <div className={`flex justify-center sm:px-8 ${className}`}>
      <div className="flex w-full max-w-7xl lg:px-8 justify-center">
        {children}
      </div>
    </div>
  );
}

function InnerContainer({ className = '', children }: Readonly<{ className?: string, children: React.ReactNode }>) {
  return (
    <OuterContainer>
      <div className={`w-full mx-4 max-w-2xl sm:mx-7.5 lg:max-w-5xl ${className}`}>
        {children}
      </div>
    </OuterContainer>
  )
}

export { OuterContainer, InnerContainer };