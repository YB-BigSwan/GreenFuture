import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Grid, Button, TextField, Stack } from '@mui/material';
import ArrowForward from "../assets/arrow_forward.svg";
import "../styles/events.css";

export const eventData = [
  {
    id: 1,
    imgUrl:"https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Volunteer 1",
    description: "Something about the event",
    date: "2024-03-22",
    time: "17:00",
    location: "Aleksanterikatu 1, Helsinki"
  },
  {
    id:2,
    imgUrl:"https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Volunteer 2",
    description: "Something about the event",
    date: "2024-04-17",
    time: "12:00",
    location: "Rautatie 14, Helsinki"
  },
  {
    id:3,
    imgUrl:"https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Volunteer 3",
    description: "Something about the event",
    date: "2024-05-20",
    time: "13:30",
    location: "Slomonkatu 22, Vantaa"
  }
]

function Events(): JSX.Element {
  // State to manage the visibility of the form
  const [showForm, setShowForm] = useState<boolean>(false);
  
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
        <h1 className="page-title">Volunteer</h1>
        {eventData.map((program) => (
          <div className="event-card" key={program.id}>
            <img
              src={program.imgUrl}
              alt="a photo of garbage bins"
              className="event-card-img"
            />
            <div className="event-card-text">
              <p className="event-card-title">{program.title}</p>
              <p className="event-card-description">
                {program.description}<br/>
                {program.date}<br/>
                {program.time}<br/>
                {program.location}              
              </p>       
            </div>
            <Link to={`/volunteer/${program.id}`} className="event-link">
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
          Add Volunteer
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
