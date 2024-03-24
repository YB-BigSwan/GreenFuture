/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Grid, Button, TextField, Stack } from "@mui/material";
import ArrowForward from "../assets/arrow_forward.svg";
import "../styles/events.css";

interface Event {
  id: string;
  img_url: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

function Events(): JSX.Element {
  // State to manage the visibility of the form
  const [showForm, setShowForm] = useState<boolean>(false);

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}event`);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      const formattedData = data.map((event: Event) => ({
        ...event,
        date: new Date(event.date).toISOString().split("T")[0],
      }));
      setEvents(formattedData);
    } catch (error: any) {
      console.error("Error fetching events:", error.message);
    }
  };

  // Function to toggle the visibility of the form
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Initial form values
  const initialValues = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
    setShowForm(false);
  };

  return (
    <div className="events-wrapper">
      <div className="events-container">
        <h1 className="page-title">Events</h1>
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img
              src={event.img_url}
              alt="a photo of garbage bins"
              className="event-card-img"
            />
            <div className="event-card-text">
              <p className="event-card-title">{event.title}</p>
              <p className="event-card-description">
                {event.description}
                <br />
                {event.date}
                <br />
                {event.time}
                <br />
                {event.location}
              </p>
            </div>
            <Link to={`/event/${event.id}`} className="event-link">
              More Info{" "}
              <img
                src={ArrowForward}
                alt="arrow forward"
                className="arrow-forward"
              />
            </Link>
          </div>
        ))}

        <button className="event-link" onClick={toggleForm}>
          Add Event
        </button>

        {showForm && (
          <div className="modal-overlay" onClick={toggleForm}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form id="add-event" className="event-form">
                  {/* Form fields */}
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="title"
                        placeholder="Title"
                        label="Title"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="Description"
                        placeholder="Description"
                        label="Description"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="date"
                        placeholder="Date"
                        label="Date"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="time"
                        placeholder="Time"
                        label="Time"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="location"
                        placeholder="Location"
                        label="Location"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    sx={{ mt: 2 }}
                  >
                    <Button variant="contained">Submit</Button>
                    <Button variant="contained" onClick={toggleForm}>
                      Close
                    </Button>
                  </Stack>
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
