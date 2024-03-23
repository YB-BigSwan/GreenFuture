import { useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form} from 'formik';
import { Grid, Button, TextField, Stack } from '@mui/material';
import { eventData} from './Worshops';
import "../styles/events.css";

function EventInfo(): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);

  const { id } = useParams<{id: string}>();
  const eventId: number| undefined = id ? parseInt(id, 10): undefined;
  const eventDataItem = eventId ? eventData.find((item) => item.id === eventId) : undefined;

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const initialValues = {
    name :'',
    email : ''
  }

  const onSubmit = (values: any) => {
    console.log(values);
    setShowForm(false);
  }

  return (
    <div className="events-wrapper">
        <div className="events-container">
            <h1 className="page-title">{eventDataItem?.title}</h1>

            <div className="event-card">
            <img
                src={eventDataItem?.imgUrl}
                alt="Event"
                className="event-card-img"
            />
            </div>
            <div className="event-card-text">
                <p className="event-card-description">
                    Date: {eventDataItem?.date}<br />
                    Time: {eventDataItem?.time}<br />
                    Location: {eventDataItem?.location}<br />
                    <p>{eventDataItem?.description}</p> 
                </p>       
            </div>
            <button className="event-link" onClick={toggleForm}>
                Register
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
                            <h2>Register for the workshop</h2>
                            <Grid item xs={12}>
                                <TextField name="name" placeholder='Full Name' label='Full Name' variant='outlined'/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="email" placeholder='Email' label='Email' variant='outlined'/>
                            </Grid>
                        </Grid>
                        <Stack spacing={2} direction='row' justifyContent='center' sx={{mt: 2}}>
                            <Button variant="contained">Register</Button>
                            <Button variant="contained" onClick={toggleForm}>Close</Button>
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

export default EventInfo;