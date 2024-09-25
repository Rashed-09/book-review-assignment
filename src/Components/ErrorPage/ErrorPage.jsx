import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    const error = useRouteError()
    console.log(error)
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div className="flex flex-col gap-4 h-[100vh] items-center justify-center">
            {
                error.internal && <h2 className="text-3xl font-bold">{error.statusText}</h2>
            }
            <button className="btn btn-success text-white" onClick={goBack}>Back</button>
        </div>
    );
};

export default ErrorPage;