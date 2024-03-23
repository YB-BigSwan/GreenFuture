import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Grid, Button, TextField, Stack } from '@mui/material';
import ArrowForward from "../assets/arrow_forward.svg";
import "../styles/events.css";


interface Workshops {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

function Events(): JSX.Element {
  // State to manage the visibility of the form
  const [showForm, setShowForm] = useState<boolean>(false);

  const [workshops, setWorkshops] = useState<Workshops[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/workshop");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      const formattedData = data.map((workshop: Workshops) => ({
        ...workshop,
        date: new Date(workshop.date).toISOString().split('T')[0],
        time: new Date(workshop.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
      }));
      setWorkshops(formattedData);
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
    title: '',
    description:'',
    date: '',
    time: '',
    location: '',
  };

  const onSubmit = (values: any) => {
    console.log(values);
    setShowForm(false); 
  };

  return (
    <div className="events-wrapper">
      <div className="events-container">
        <h1 className="page-title">Workshops</h1>
        {workshops.map((workshop) => (
          <div className="event-card" key={workshop.id}>
            <img
              src={workshop.imgUrl}
              alt="a photo of garbage bins"
              className="event-card-img"
            />
            <div className="event-card-text">
              <p className="event-card-title">{workshop.title}</p>
              <p className="event-card-description">
                {workshop.description}<br/>
                {workshop.date}<br/>
                {workshop.time}<br/>
                {workshop.location}              
              </p>       
            </div>
            <Link to={`/workshop/${workshop.id}`} className="event-link">
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
          Add Workshop
        </button>

        {showForm && (
          <div className="modal-overlay" onClick={toggleForm}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
              >
                <Form id="add-event" className="event-form">
                  {/* Form fields */}
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField name="title" placeholder='Title' label='Title' variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="Description" placeholder='Description' label='Description' variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="date" placeholder='Date' label='Date' variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="time" placeholder='Time' label='Time' variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="location" placeholder='Location' label='Location' variant='outlined' />
                    </Grid>
                  </Grid>

                  <Stack spacing={2} direction='row' justifyContent='center' sx={{mt: 2}}>
                    <Button variant='contained'>Submit</Button>
                    <Button variant='contained' onClick={toggleForm}>Close</Button>
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
