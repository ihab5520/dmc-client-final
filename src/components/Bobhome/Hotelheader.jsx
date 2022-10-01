import React from "react";
import Search from "./HomeSearch";


export default function Hotelheader() {
  return (
    <div className="pb-4">
      <div
        className="text-center bg-image p-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')",
          height: "4  00px",
        }}
      >
        <div className="pt-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
              <h1 className="mb-3 text-white">
                HOTELS, RESORTS, HOSTELS & MORE
              </h1>
              <h4 className="mb-3 text-white">
                Get the best prices on 2,000,000+ properties, worldwide
              </h4>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
