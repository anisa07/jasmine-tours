import { Card } from "react-bootstrap";
import "./EventAccordion.css";

function EventAccordion({ data }) {
  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedData = chunkArray(data, 3);

  return (
    <>
      <div className="row">
        {chunkedData.map((chunk, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex flex-column h-100">
              {chunk.map((item) => (
                <Card
                  key={item.id}
                  className="mb-2 flex-grow-1 custom-hover custom-shadow-events"
                >
                  <Card.Body className="text-center d-flex flex-column">
                    <Card.Title>{item.header}</Card.Title>
                    <Card.Text className="d-flex justify-content-center align-items-center">
                      <a
                        className="custom-link mr-2"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Подробнее
                      </a>
                      <i
                        className="fa-solid fa-link"
                        style={{ marginLeft: "5px", color: "#8c6699" }}
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EventAccordion;

