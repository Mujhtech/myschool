import React from "react";
import LoadingSvg from "../spinner.svg";

export default function Loading() {
    return (
        <img src={LoadingSvg} height="25" alt="Loading" />
    );
}
