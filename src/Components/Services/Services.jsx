import  { useState, useEffect } from 'react';
import './Services.css';
import service_1 from '../../assets/general-english.png';
import service_2 from '../../assets/business-english.png';
import service_3 from '../../assets/ielts-preparation.png';
import service_4 from '../../assets/cae-preparation.png';

const Services = () => {
    const [showModal, setShowModal] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    // Function to open the modal for a specific service
    const openModal = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };
      // Function to close the modal when clicking outside
      const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    // Modal content data for each service
    const modalContent = {
        'General English': (
            <div>
                <h3>General English Course Description</h3>
                <p>The General English course is designed to provide learners with a solid foundation in English language skills, focusing on the four essential components: reading, writing, listening, and speaking. This course is suitable for students of all proficiency levels, from beginners to advanced learners.</p>
                <h4>Key Features:</h4>
                <ul>
                    <li><strong>Language Proficiency Development:</strong> The course aims to improve overall language proficiency, enabling students to communicate effectively in various everyday situations. Emphasis is placed on vocabulary expansion, grammar usage, and sentence structures.</li>
                    <li><strong>Reading Comprehension:</strong> Students engage with a variety of texts, including articles, short stories, and authentic materials, to enhance reading comprehension skills. They learn strategies for skimming, scanning, and understanding main ideas and details.</li>
                    <li><strong>Writing Skills:</strong> The course helps students develop writing skills through practice in different genres such as essays, emails, letters, and reports. Students learn how to organize their ideas coherently, use appropriate language, and apply correct grammar and punctuation.</li>
                    <li><strong>Listening Practice:</strong> Listening activities expose students to different accents, speech patterns, and genres, including conversations, lectures, interviews, and podcasts. Students develop their listening comprehension skills and learn to extract key information from spoken texts.</li>
                    <li><strong>Speaking Practice:</strong> Through interactive activities, discussions, role-plays, and presentations, students enhance their speaking skills, fluency, and confidence. They learn to express opinions, participate in conversations, and deliver presentations on various topics.</li>
                    <li><strong>Cultural Awareness:</strong> The course also explores cultural aspects of English-speaking countries, providing insights into customs, traditions, and social norms. This fosters cross-cultural understanding and enhances communication competence in diverse contexts.</li>
                </ul>
                <h4>Course Objectives:</h4>
                <ul>
                    <li>Develop proficiency in the four language skills: reading, writing, listening, and speaking.</li>
                    <li>Expand vocabulary and improve grammatical accuracy.</li>
                    <li>Enhance communication skills for everyday interactions and practical situations.</li>
                    <li>Build confidence in using English in real-life contexts.</li>
                    <li>Foster an appreciation for English language and culture.</li>
                </ul>
                <h4>Assessment and Progress:</h4>
                <p>Assessment in the General English course may include quizzes, tests, assignments, projects, and oral presentations. Regular feedback from instructors helps students track their progress and identify areas for improvement. Additionally, self-study resources and supplementary materials are available to support independent learning outside the classroom.</p>
            </div>
        ),
        'Business English': 'Content for Business English...',
        'IELTS preparation': 'Content for IELTS Preparation...',
        'FCE/CAE preparation': 'Content for FCE/CAE Preparation...',
    };
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    useEffect(() => {
        // Prevent scrolling of the main page content when the modal is open
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);


    return (
        <div className='services'>
            {showModal && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{modalContent[selectedService]}</p>
                    </div>
                </div>
            )}
            <div className="service" onClick={() => openModal('General English')}>
                <p>General English</p>
                <img src={service_1} alt="" />
            </div>
            <div className="service" onClick={() => openModal('Business English')}>
                <p>Business English</p>
                <img src={service_2} alt="" />
            </div>
            <div className="service" onClick={() => openModal('IELTS preparation')}>
                <p>IELTS preparation</p>
                <img src={service_3} alt="" />
            </div>
            <div className="service" onClick={() => openModal('FCE/CAE preparation')}>
                <p>FCE/CAE preparation</p>
                <img src={service_4} alt="" />
            </div>
        </div>
    );
};

export default Services;
