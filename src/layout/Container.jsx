export default function Container({ children }) {
  return(
    <div className="flex flex-col items-center justify-center h-[calc(100vh-144px)]">
      { children }
    </div>
  )
}