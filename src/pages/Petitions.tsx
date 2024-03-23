import ArrowForward from "../assets/arrow_forward.svg";
import "../styles/petitions.css";

function Petitions() {
  const petitionData = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "I will just write this here for now. The vote link could just link to a change.org pertition. Then we dont need to handle voter authentication. Consequatur voluptatem culpa obcaecati ad enim harum aspernatur accusantium voluptate pariatur, magni ab nobis libero facilis dolores. Quos qui quidem quisquam cupiditate magni earum est! Et, enim obcaecati?",
      link: "https://www.change.org/p/let-s-reduce-the-effect-of-climatic-change-we-can-go-green-by-planting-economic-trees?source_location=petitions_browse",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "I will just write this here for now. The vote link could just link to a change.org pertition. Then we dont need to handle voter authentication. Consequatur voluptatem culpa obcaecati ad enim harum aspernatur accusantium voluptate pariatur, magni ab nobis libero facilis dolores. Quos qui quidem quisquam cupiditate magni earum est! Et, enim obcaecati?",
      link: "https://www.change.org/p/let-s-reduce-the-effect-of-climatic-change-we-can-go-green-by-planting-economic-trees?source_location=petitions_browse",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "I will just write this here for now. The vote link could just link to a change.org pertition. Then we dont need to handle voter authentication. Consequatur voluptatem culpa obcaecati ad enim harum aspernatur accusantium voluptate pariatur, magni ab nobis libero facilis dolores. Quos qui quidem quisquam cupiditate magni earum est! Et, enim obcaecati?",
      link: "https://www.change.org/p/let-s-reduce-the-effect-of-climatic-change-we-can-go-green-by-planting-economic-trees?source_location=petitions_browse",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "I will just write this here for now. The vote link could just link to a change.org pertition. Then we dont need to handle voter authentication. Consequatur voluptatem culpa obcaecati ad enim harum aspernatur accusantium voluptate pariatur, magni ab nobis libero facilis dolores. Quos qui quidem quisquam cupiditate magni earum est! Et, enim obcaecati?",
      link: "https://www.change.org/p/let-s-reduce-the-effect-of-climatic-change-we-can-go-green-by-planting-economic-trees?source_location=petitions_browse",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "I will just write this here for now. The vote link could just link to a change.org pertition. Then we dont need to handle voter authentication. Consequatur voluptatem culpa obcaecati ad enim harum aspernatur accusantium voluptate pariatur, magni ab nobis libero facilis dolores. Quos qui quidem quisquam cupiditate magni earum est! Et, enim obcaecati?",
      link: "https://www.change.org/p/let-s-reduce-the-effect-of-climatic-change-we-can-go-green-by-planting-economic-trees?source_location=petitions_browse",
    },
  ];

  return (
    <div className="petitions-wrapper">
      <div className="petitions-container">
        <h1 className="page-title">Petitions</h1>
        {petitionData.map((petition, index) => (
          <div className="petition-card" key={index}>
            <img
              src={petition.imgUrl}
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
