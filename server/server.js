import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
import multer from 'multer';
import { promises as fs } from 'fs';
import cors from 'cors';
import { generateContent1 } from './AskMedica.js';
import { generateContent } from './DetectValues.js';
import {addPatient,conformPatient,addPatientRecord,getPatientRecord,addDoctor,conformDoctor}  from './FireBase.js';
const patientData = [];
const doctorData=[];
const patinetRecords=[];
let fileName = "";

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/') // Store files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName); // Add timestamp to avoid filename conflicts
  }
});

const upload = multer({ storage: storage });



app.post('/patient/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No files were uploaded.');
    }
    const generatedText = await generateContent("find Hemoglobin, RBC, HCT,WBC, MCV, MCH,MCHC, lymphocytes, neutrophils, monocytes, eosinophils,basophils, RDW and their values in standard units and ignore any ranges if given in the image and dont keep any astericks and keep the headings as I provided only and also remove astericks in the data as well and the data must be just in format of key value pair , no '*' in key or value , i.e dont keep it as bold", fileName);
    console.log(generatedText)
    const lines = generatedText.split('\n');
    const parsedData = {};
    lines.forEach(line => {
      const [key, value] = line.split(':');
      const trimmedKey = key.trim().replace(/\*/g, ''); // Remove asterisks
      const trimmedValue = value ? value.trim() : '';
      parsedData[trimmedKey] = trimmedValue;
    });
    res.send({ data: parsedData });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/patient/signin', async (req, res) => {
  try {
    const datagot = req.body;
    const output=conformPatient(datagot.username,datagot.password);
    const result = patientData.find(item => item.username === datagot.username);
    if (output) {
        res.send({ data: "yes" });
      } else {
        res.send({ data: "no" });
      }
  }
   catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/patient/signup', async (req, res) => {
  try {
    addPatient(req.body);
    console.log(req.body);
    patientData.push(req.body);
    res.send({ data: "yes" });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/patient/submitrecord', async (req, res) => {
  try {
    const { username, data } = req.body;
    addPatientRecord(username,data)
    const userRecordIndex = patinetRecords.findIndex(obj => obj.hasOwnProperty(username)); // Find the index of the user's record in patinetRecords array

    if (userRecordIndex !== -1) { // If user's record exists
      patinetRecords[userRecordIndex][username].push(data); // Push the new data to the user's record array
    }
    else{
      patinetRecords.push({[username] : [data]})
    }
    console.log(patinetRecords); // Log the updated patinetRecords array for debugging
    res.send({ data: "Record submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/patient/chart', async (req, res) => {
  try {
const username=req.body.username;
const output=await getPatientRecord(username);
console.log(output);
    if (output) {
      res.send({data : output})
    }
    else{
      res.send({data : "no"})
    }

  }
  catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/api/data', async (req, res) => {
  try {
    const username=req.body.username;
    const output=await getPatientRecord(username);
    if(output){
   const generatedText = await generateContent1(req.body.txt  +  JSON.stringify(output));
    res.send({ data: generatedText });
    }
    else{    res.send({ data: "I could see no records of you,kindly upload ur details " });
  }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/doctor/signin', async (req, res) => {
  try {
    const datagot = req.body;
    const result= await conformDoctor(datagot.username,datagot.password);
    if (result) {
    console.log("sending to react..")
      res.send({data :result})
    }
    else{
      res.send({data:"no"})
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/doctor/signup', async (req, res) => {
  try {
    console.log(req.body);
    addDoctor(req.body)
    res.send({ data: "yes" });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
