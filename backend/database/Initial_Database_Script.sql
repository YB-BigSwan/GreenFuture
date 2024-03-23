-- Create the 'User' table
CREATE TABLE [User] (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    pass_hash NVARCHAR(255) NOT NULL,
    role NVARCHAR(50) NOT NULL
);

-- Create the 'Videos' table
CREATE TABLE Videos (
    video_id INT IDENTITY(1,1) PRIMARY KEY,
    embed_link NVARCHAR(255) NOT NULL,
    category NVARCHAR(50) NOT NULL,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX)
);

-- Create the 'Petition' table
CREATE TABLE Petition (
    petition_id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    vote_count INT
);

-- Create the 'Event' table
CREATE TABLE Event (
    event_id INT IDENTITY(1,1) PRIMARY KEY,
    organizer_user_id INT,
    location NVARCHAR(255),
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    [date] DATE,
    [time] NVARCHAR(50)
);

-- Create the 'EventAttendees' table
CREATE TABLE EventAttendees (
    event_id INT,
    user_id INT,
    FOREIGN KEY (event_id) REFERENCES Event(event_id),
    FOREIGN KEY (user_id) REFERENCES [User](user_id),
    PRIMARY KEY (event_id, user_id)
);

INSERT INTO [User] (username, email, pass_hash, role)
VALUES 
    ('user1', 'user1@example.com', 'password1', 'organizer'),
    ('user2', 'user2@example.com', 'password2', 'attendee'),
    ('user3', 'user3@example.com', 'password3', 'attendee');

-- Insert sample data into the 'Videos' table
INSERT INTO Videos (embed_link, category, title, description)
VALUES 
    ('https://www.youtube.com/embed/8J9QEJUXH-w', 'Educational', 'Introduction to SQL', 'A beginner-friendly tutorial on SQL basics'),
    ('https://www.youtube.com/embed/7M7tQfdCeN8', 'Entertainment', 'Funny Cats Compilation', 'A compilation of funny cat videos'),
    ('https://www.youtube.com/embed/5qap5aO4i9A', 'Technology', 'Introduction to Machine Learning', 'An overview of machine learning concepts');

-- Insert sample data into the 'Petition' table
INSERT INTO Petition (title, description, vote_count)
VALUES 
    ('Save the Bees', 'Petition to protect endangered bee species', 1000),
    ('Climate Change Action', 'Petition for government action on climate change', 500),
    ('End Plastic Pollution', 'Petition to reduce plastic waste', 750);

-- Insert sample data into the 'Event' table
INSERT INTO Event (organizer_user_id, location, title, description, [date], [time])
VALUES 
    (1, 'Helsinki', 'Promoting Sustainable Development Through Education', 'Join us for a discussion on ensuring all learners acquire knowledge and skills needed to promote sustainable development, including education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship, and appreciation of cultural diversity and of culture’s contribution to sustainable development.', '2030-04-07', '18:00:00'),
    (2, 'Helsinki', 'Empowering Global Citizens for Sustainable Future', 'Join us for a workshop focused on empowering individuals to become global citizens and promote sustainable development. Learn about education for sustainable development, gender equality, human rights, and the importance of cultural diversity in achieving sustainability goals.', '2030-04-07', '20:00:00');

-- Insert sample data into the 'EventAttendees' table
INSERT INTO EventAttendees (event_id, user_id)
VALUES 
    (1, 2),  -- user2 attending Promoting Sustainable Development Through Education
    (1, 3),  -- user3 attending Promoting