import React, { useState, useContext } from 'react';
import questions from './questions';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import { AuthContext } from '../context';
import "./modal.css";
import pdflogo from "../images/footerbg.png"

const Questionnaire = () => {
  const { authuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [responses, setResponses] = useState({});
  const [report, setReport] = useState(null);  // State to store the report result
  const [showModal, setShowModal] = useState(false);  // State to toggle modal visibility

  const handleChange = (e, questionId, option) => {
    setResponses({
      ...responses,
      [questionId]: {
        option: option,
        answer: e.target.value
      }
    });
  };
  const validateResponses = () => {
    for (let i = 0; i < questions.length; i++) {
      if (!responses[questions[i].id]) {
        toast.error(`Please answer question ${questions[i].id}`);
        return false;
      }
    }
    return true;
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Body Type Report', 105, 20, { align: 'center' });
    doc.addImage(pdflogo, 'PNG', 170, 5, 30, 25);

    // User Info
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${authuser.firstName} ${authuser.lastName}`, 10, 40);
    doc.text(`Email: ${authuser.email}`, 10, 50);
    doc.text(`Phone: ${authuser.phone}`, 10, 60);
    doc.text(`Age: ${authuser.age}`, 10, 70);
    doc.text(`Gender: ${authuser.gender}`, 10, 80);
    
    // Report Data
    doc.setFontSize(16);
    doc.text('Report:', 10, 100);
    doc.text(`Vatt: ${report.Vatt}%`, 10, 120);
    doc.text(`Pitta: ${report.Pitta}%`, 10, 130);
    doc.text(`Kapha: ${report.Kapha}%`, 10, 140);
    doc.text(`Body Type: `, 10, 160);
    doc.setFont('helvetica', 'bold');
    doc.text(`${report.bodyType}`, 10, 170);
  
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`Food to be Taken :`, 10, 180);
    doc.setFont('helvetica', 'normal');
    doc.text(`${report.foodtaken}`, 10, 190);
    doc.setFont('helvetica', 'bold');
    doc.text(`Food to be Avoid :`, 10, 230);
    doc.setFont('helvetica', 'normal');
    doc.text(`${report.foodavoid}`, 10, 240);

    // Save the PDF
    doc.save('body_type_report.pdf');
  };

  const submitQuestionnaire = async () => {
    if (!validateResponses()) {
      return;  // Stop if validation fails
    }

    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5000/api/questionnaire/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ responses }),
      });
      const data = await response.json();
      if (data.message === "Not authorized, token failed") {
        toast.error("Session Expired Please Login Again");
        setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('loginuser');
          navigate("/login");
          window.location.reload();
        }, 1000);
        throw new Error('Failed to save responses');
      }
      setReport(data.result);
      setShowModal(true);  // Show the modal
      setResponses({})
      toast.success(data.message);
    } catch (err) {
      // console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id} className="question">
          <h3>Question {q.id}: {q.question}</h3>
          <ul>
            {q.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={responses[q.id]?.answer === option}
                    onChange={(e) => handleChange(e, q.id, String.fromCharCode(65 + index))}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button type="submit" className="qbtn" onClick={submitQuestionnaire}>Submit</button>

      {/* Modal for showing the report */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Body Type Report</h2>
            <p><strong>Name:</strong> {authuser.firstName} {authuser.lastName}</p>
            <p><strong>Email:</strong> {authuser.email}</p>
            <p><strong>Phone:</strong> {authuser.phone}</p>
            <p><strong>Age:</strong> {authuser.age}</p>
            <p><strong>Gender:</strong> {authuser.gender}</p>
            {report && (
              <div>
                <p><strong>Vatt:</strong> {report.Vatt}%</p>
                <p><strong>Pitta:</strong> {report.Pitta}%</p>
                <p><strong>Kapha:</strong> {report.Kapha}%</p>
                <p><strong>Body Type:</strong> {report.bodyType}</p>
                <button onClick={generatePDF}>Download PDF</button>
              </div>
            )}
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
