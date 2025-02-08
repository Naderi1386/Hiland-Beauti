import { useRouteError } from "react-router-dom"

interface ErrorType{
    message:string
    data:string
}

const Error = () => {
    const error=useRouteError() as ErrorType
  return (
    <div className="text-center py-4 font-bold text-2xl text-red-500">
        <h1>{error.data ? error.data : error.message}</h1>
    </div>
  )
}

export default Error