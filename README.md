
# MyHealthPal - Automatic AI enabled Health Monitoring System

MyHealthPal is an innovative Automatic Health Monitoring System designed to revolutionize healthcare management, particularly in rural and suburban communities. The system addresses the challenge of patients failing to maintain diagnostic reports, leading to unnecessary repeat checkups and wasted resources. By integrating advanced technology, including AI chatbots and dynamic dashboards, MyHealthPal aims to streamline healthcare processes, reduce costs, and improve patient-doctor interactions. Patients can securely upload their diagnostic reports and access comprehensive health analyses, while doctors benefit from a centralized platform for reviewing patient data and medical history. With its transformative potential, MyHealthPal represents a significant step towards creating a more efficient, accessible, and patient-centric healthcare system.

## API Reference

#### Firebase Firestudio
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)

#### Google AI Studio
- [Google AI Studio Documentation](https://ai.google/studio)





## Authors

- [@pavanvarma](https://github.com/PavanVarma474)
- [@sheeba sultana](https://github.com/SHEEBASULTANA)
- [@Nikhila ](https://github.com/nikhila-lanke)
- [@Hari krishna](https://github.com/Hari-Thakur)


## Documentation
Problem Statement:
Automatic Health Monitoring System: In present days, the patients belonging to rural and sub-urban communities do not maintain the diagnosis reports for which they frequently go for regular checkups wasting there valuable money. Thus, an automatic report maintaining system is to be developed to avoid repetitive diagnosing of the patients. 

Abstract:
Our project aims to develop an Automatic Health Monitoring System, utilizing advanced technology to automate diagnostic report maintenance in suburban and rural areas. This innovative strategy reduces costs, maximizes healthcare resources, and enhances overall effectiveness. The software comprises two main components: an AI chatbot trained on patient data(both images and text data) and integrated with large language models (LLM) for medical knowledge to assist patience queries and provide useful insights and suggestions in text to text format and a dynamic dashboard reactJS. The dashboard offers patients a comprehensive analysis of health report variations, aiding both doctors and patients for better understanding and treatment. Access is granted with authentication to both doctors and patients for secure diagnosis report uploads, stored in a high-speed database like Firebase.

INTRODUCTION:
In present days, the patients belonging to rural and sub-urban communities do not maintain the diagnosis reports for which they frequently go for regular checkups wasting there valuable money. And doctors find difficult and uneasy while treating patience because of not knowing their previous medical history. There is no ready made assistant for them in case of emergency they have to travel kilometers of distance to get even basic medical assistance. Thus, an automatic report maintaining system and Ai enabled assistant is to be developed to avoid repetitive diagnosing of the patients and provide basic emergency assistance. 

Objective:
Automatic Health Monitoring System with Ai enabled Assistant

Proposed Solution:
Our project aims to develop an Automatic Health Monitoring System, utilizing advanced technology to automate diagnostic report maintenance in suburban and rural areas. This innovative strategy reduces costs, maximizes healthcare resources, and enhances overall effectiveness. The software comprises two main components: an AI chatbot trained on patient data(both images and text data) and integrated with large language models (LLM) for medical knowledge to assist patience queries and provide useful insights and suggestions in text to text format and a dynamic dashboard. The dashboard offers patients a comprehensive analysis of health report variations, aiding both doctors and patients for better understanding and treatment. Access is granted with authentication to both doctors and patients for secure diagnosis report uploads, stored in a high-speed database like Firebase.
Conclusion/Implications:
The Automatic Health Monitoring System streamlines diagnostic report maintenance, reducing costs and maximizing healthcare efficiency. AI chatbots and dynamic dashboards enhance patient-doctor interactions, providing valuable insights. Secure access and high-speed databases ensure confidentiality. The project holds transformative potential, offering a more efficient, accessible, and patient-centric healthcare system.

## FAQ

#### What is MYhealthpal?
MYhealthpal is an Automatic Health Monitoring System designed to automate diagnostic report maintenance in suburban and rural areas. It includes an AI-enabled chatbot for healthcare assistance and a dynamic dashboard for analyzing health report variations.


#### How does MYhealthpal work?

MYhealthpal utilizes advanced technology to automate the maintenance of diagnostic reports. Patients can upload their reports, which are securely stored in a high-speed database. The AI chatbot assists users with healthcare queries, while the dynamic dashboard provides comprehensive analysis of health report variations.


#### What are the benefits of using MYhealthpal?
MYhealthpal reduces costs and maximizes healthcare resources by streamlining diagnostic report maintenance. It enhances patient-doctor interactions, provides valuable insights, and ensures secure access to diagnostic reports.
#### Who can use MYhealthpal?
MYhealthpal is designed for both patients and doctors. Patients can upload their diagnostic reports and interact with the AI chatbot for healthcare assistance. Doctors can access patient reports, view graphs, and review medical history through the dynamic dashboard.
#### Is MYhealthpal secure?
Yes, MYhealthpal ensures secure access to diagnostic reports through authentication mechanisms. Reports are stored in a high-speed

## Architecture 
The MYhealthpal system architecture consists of the following components:

Frontend: Developed using ReactJS for the user interface.
Backend: Utilizes Node.js  for server-side logic.
Database: Stores patient data using Firebase Firestore.
AI Chatbot: Integrated with Google AI Studio for natural language processing.
## Features

- Automatic Health Monitoring System
- AI Chatbot Integration
- Dynamic Dashboard
- File Editing
- Secure Authentication for Doctors and Patients
- Report Upload and Storage
- Integration with Firebase Firestore for Database
- Integration with Google AI Studio for AI Chatbot
- User-friendly Interface


## Feedback

- [@pavanvarma](https://github.com/PavanVarma474)


## Lessons Learned

One obstacle encountered during the project was devising a responsive and interactive dashboard capable of promptly displaying patient analyses following data upload. Multiple strategies were considered, and after thorough exploration, we settled on leveraging the react-chatjs-2 library to address this challenge. Additionally, there was a concern regarding effectively labeling the values to ensure user clarity. After brainstorming potential solutions, we opted to utilize JavaScript's new Date() method to convert timestamps into string format. This approach facilitated the use of the upload date and time as labels for the patient records, enhancing user comprehension and navigation within the system.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/your-username/MYhealthpal.git
```

Go to the project directory

```bash
  cd MYhealthpal
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  open two terminals
    in first terminal :cd server
            nodemon server.js
    in second terminal:cd client
    yarn start
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Tech Stack

react js, 
node js,
express js,
firbase,
google cloud.
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

