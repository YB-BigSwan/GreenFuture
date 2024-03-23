-- Alter the 'Petition' table to add user_id and link fields
ALTER TABLE Petition
ADD user_id INT,
    link NVARCHAR(255);

-- Add foreign key constraint to link user_id to User table
ALTER TABLE Petition
ADD CONSTRAINT FK_Petition_User FOREIGN KEY (user_id) REFERENCES [User](user_id);
