import React, { useState, useEffect } from "react";

const regular = 250;
const premium = 550;

const ChooseMovieSeat = () => {
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState(Array(60).fill(false));

  useEffect(() => {
    const newCount = selectedSeats.length;
    setCount(newCount);
    setAmount(newCount * premium);
  }, [selectedSeats]);

  const handleSeatChange = (index) => {
    const newSeats = [...seats];
    if (selectedSeats.length < 5 || newSeats[index]) {
      newSeats[index] = !newSeats[index];
      setSeats(newSeats);

      if (newSeats[index]) {
        setSelectedSeats((prevSelectedSeats) => {
          const newSelectedSeats = [...prevSelectedSeats, index + 1];
          console.log("Selected Seats:", newSelectedSeats);
          return newSelectedSeats;
        });
      } else {
        setSelectedSeats((prevSelectedSeats) => {
          const newSelectedSeats = prevSelectedSeats.filter(
            (seat) => seat !== index + 1
          );
          console.log("Selected Seats:", newSelectedSeats);
          return newSelectedSeats;
        });
      }
    }
  };

  return (
    <>
      <div
        className="container mt-5 mb-5 p-1"
        style={{ border: "1px solid red" }}
      >
        <div className="row m-0 p-1" style={{ border: "1px solid blue" }}>
          <div
            className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-1"
            style={{ border: "1px solid yellow" }}
          >
            <div className="box p-1" style={{ border: "1px solid green" }}>
              <div
                className="box-two p-1"
                style={{ border: "1px solid green" }}
              >
                <div
                  className="outer-section-one p-1"
                  style={{ border: "1px solid pink" }}
                >
                  <div
                    className="inner-section-one p-1"
                    style={{ border: "1px solid violet" }}
                  >
                    <div className="movie-title">Madame Web</div>
                  </div>
                  <div
                    className="inner-section-two p-1"
                    style={{ border: "1px solid violet" }}
                  >
                    <div className="pick-seats text-center text-dark p-1">
                      {seats.map((booked, index) => (
                        <React.Fragment key={index}>
                          <input
                            type="checkbox"
                            name="selected-seat"
                            id={`S${index + 1}`}
                            className="selected-seat"
                            checked={booked}
                            onChange={() => handleSeatChange(index)}
                          />
                          <label
                            htmlFor={`S${index + 1}`}
                            className={`seat ${booked ? "booked" : ""}`}
                          >
                            {`S${index + 1}`}
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="indicators p-1">
                      <div className="indicator ms-3">Available</div>
                      <div className="indicator ms-3">Booked</div>
                      <div className="indicator ms-3">Selected</div>
                    </div>
                  </div>
                </div>
                <div
                  className="outer-section-two p-3"
                  style={{ border: "1px solid pink" }}
                >
                  <div
                    className="inner-section-three me-1 p-2"
                    style={{ border: "1px solid violet" }}
                  >
                    <span>
                      <span className="ticket-count">{count}</span> Ticket
                    </span>
                    <div className="total-amount">₱{amount}</div>
                    <div className="selected-seats">
                      Selected Seats:{" "}
                      {selectedSeats.map((seat) => `S${seat}`).join(", ")}
                    </div>
                  </div>
                  <button
                    className="btn btn-purchase-ticket ms-1"
                    type="button"
                  >
                    Purchase Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseMovieSeat;
