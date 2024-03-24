/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ArrowForward from "../assets/arrow_forward.svg";
import "../styles/petitions.css";

interface Petition {
  img_url: string;
  title: string;
  description: string;
  link: string;
}

function Petitions() {
  const [petitions, setPetitions] = useState<Petition[]>([]);

  useEffect(() => {
    fetchPetitions();
  }, []);

  const fetchPetitions = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}petition`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch petitions");
      }
      const data = await response.json();
      setPetitions(data);
    } catch (error: any) {
      console.error("Error fetching petitions:", error.message);
    }
  };

  return (
    <div className="petitions-wrapper">
      <div className="petitions-container">
        <h1 className="page-title">Petitions</h1>
        {petitions.map((petition, index) => (
          <div className="petition-card" key={index}>
            <img
              src={petition.img_url}
              alt="petition thumbnsil image"
              className="petition-card-img"
            />
            <div className="petition-card-text">
              <p className="petition-card-title">{petition.title}</p>
              <p className="petition-card-description">
                {petition.description}
              </p>
            </div>
            <a
              href={petition.link}
              className="petition-link"
              target="_blank"
              rel="noreferrer"
            >
              VOTE{" "}
              <img
                src={ArrowForward}
                alt="arrow forward"
                className="arrow-forward"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Petitions;
