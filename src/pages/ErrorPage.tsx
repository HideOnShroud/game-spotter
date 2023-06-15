import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <NavBar />
            <Heading>Invalid Page</Heading>
            <Text>{isRouteErrorResponse(error) ? "this page doesn't exist" : "An unexpected error occurred"}</Text>
        </>
    );
}

export default ErrorPage;