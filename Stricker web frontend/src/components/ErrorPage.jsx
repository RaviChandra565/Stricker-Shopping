
import { Link, useRouteError } from "react-router-dom";
import PageTitle from "./PageTitle";
import errorImage from "../assets/util/error.png";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="text-center py-10">
      <PageTitle title={error?.status || "404"} />

      <p className="mb-4">
        {error?.statusText || "Oops! The page you are looking for doesn't exist."}
      </p>

      <img
        src={errorImage}
        alt="Error"
        className="mx-auto max-w-md mb-6"
      />

      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}