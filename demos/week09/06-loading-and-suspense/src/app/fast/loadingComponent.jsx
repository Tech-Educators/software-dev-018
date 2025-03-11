'use client'

import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingComponent() {
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

    return (
        <div>
             <ClipLoader
        color={'tomato'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    )
}