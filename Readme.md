## My Hospital Api

## Theme
    I designed Hospital api for the doctors of Hospitals which have been alloted for testing purposes of COVID+

    . There can be two types of users 
    . Doctors
    . Patient
    . Doctors would register
    . Doctors would login
    . each time patients visit doctor would do two steps
    . Register the patient in the app 
    . After the checkup, create a Report
    . Patient Report will have the following fields
    . Created by doctor
    . Status
    . Can be either of: [Negative,
     Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit] from the qn documentation


## Prerequisites
    1 Node.js
    2 Git


## Tech Used
    1 mongoose.js
    2 jwt
    3 passport
    4 passport-local


### install the npm first
`npm install`
### start the server
`npm start`


## Folder Structure

| --- .vscode<br>
| ---   config<br>
| ---    | -- middleware <br>
| ---    | -- mongoose <br>
| ---    | -- passport_jwt_strategy<br>
| ---    controllers<br>
| ---    | -- api<br>
| ---    | -- | -- v1<br>
| ---    | -- | -- | -- doctor_controller<br>
| ---    | -- | -- | -- patient_controller<br>
| ---    | -- | -- | -- home_controller<br>
| ---    images<br>
| ---     models<br>
| ---     | -- doctor<br>
| ---     | -- patient<br>
| ---     routes<br>
| ---     | --| --  | --- doctors<br>
| ---     | --| --  | --- index<br>
| ---     | --| --  | --- patients<br>
| ---     .gitignore<br>
| ---      index<br>
| ---      package-lock.json<br>
| ---      package.json<br>
| ---      Readme.md<br>

  
