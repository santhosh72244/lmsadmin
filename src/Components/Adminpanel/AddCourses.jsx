import React, { useState } from 'react';

const AddCourses = () => {
  const [formData, setFormData] = useState({
    courseImage: null,
    courseVideo: null,
    courseTitle: '',
    parentCategory: '',
    subCategory: '',
    courseDescription: '',
    coursePrice: '',
    timeSpend: '',
    requirements: '',
    courseDuration: '',
    targetAudience: '',
    level: ''
  });

  const [lessons, setLessons] = useState([]);

  const emptyVideoLesson = {
    type: 'video',
    title: '',
    description: '',
    duration: '',
    order: '',
    image: null,
    video: null,
    document: ''
  };

  const emptyQuiz = {
    type: 'quiz',
    title: '',
    description: '',
    questions: [{
      question: '',
      options: ['', '', '', ''],
      correct_ans: ''
    }]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, lessons });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleLessonChange = (index, field, value) => {
    setLessons(prevLessons => {
      const updatedLessons = [...prevLessons];
      updatedLessons[index] = {
        ...updatedLessons[index],
        [field]: value
      };
      return updatedLessons;
    });
  };

  const handleQuestionChange = (lessonIndex, questionIndex, field, value, optionIndex = null) => {
    setLessons(prevLessons => {
      const updatedLessons = [...prevLessons];
      const lesson = { ...updatedLessons[lessonIndex] };
      const question = { ...lesson.questions[questionIndex] };

      if (field === 'options' && optionIndex !== null) {
        question.options = [...question.options];
        question.options[optionIndex] = value;
      } else {
        question[field] = value;
      }

      lesson.questions[questionIndex] = question;
      updatedLessons[lessonIndex] = lesson;
      return updatedLessons;
    });
  };

  const handleAddLesson = (type) => {
    setLessons(prevLessons => [
      ...prevLessons,
      type === 'video' ? emptyVideoLesson : emptyQuiz
    ]);
  };

  // New function to remove a lesson
  const handleRemoveLesson = (indexToRemove) => {
    setLessons(prevLessons => 
      prevLessons.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleAddQuestion = (lessonIndex) => {
    setLessons(prevLessons => {
      const updatedLessons = [...prevLessons];
      updatedLessons[lessonIndex].questions.push({
        question: '',
        options: ['', '', '', ''],
        correct_ans: ''
      });
      return updatedLessons;
    });
  };

  // New function to remove a question
  const handleRemoveQuestion = (lessonIndex, questionIndex) => {
    setLessons(prevLessons => {
      const updatedLessons = [...prevLessons];
      const lesson = { ...updatedLessons[lessonIndex] };
      lesson.questions = lesson.questions.filter((_, index) => index !== questionIndex);
      updatedLessons[lessonIndex] = lesson;
      return updatedLessons;
    });
  };

  const handleLessonFileChange = (index, field, file) => {
    setLessons(prevLessons => {
      const updatedLessons = [...prevLessons];
      updatedLessons[index] = {
        ...updatedLessons[index],
        [field]: file
      };
      return updatedLessons;
    });
  };

  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <h2>Add Course</h2>
        
        {/* ... (previous form fields remain the same until Lessons section) ... */}
        
        <div className="mb-3">
          <label className="form-label">Course Title</label>
          <input 
            type="text" 
            className="form-control"
            name="courseTitle"
            placeholder="Course Name"
            value={formData.courseTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Description</label>
          <textarea 
            className="form-control"
            name="courseDescription"
            rows="6"
            value={formData.courseDescription}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Parent Category</label>
          <select 
            className="form-select"
            name="parentCategory"
            value={formData.parentCategory}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Sub Category</label>
          <select 
            className="form-select"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Course Cover Image(.jpg,.png,.jpeg)</label>
          <input 
            type="file" 
            className="form-control"
            name="courseImage"
            accept=".jpg,.png,.jpeg"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Preview video upload(.mp4)</label>
          <input 
            type="file" 
            className="form-control"
            name="courseVideo"
            accept=".mp4"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">How much time spend</label>
          <input 
            type="text" 
            className="form-control"
            name="timeSpend"
            placeholder="How much time spend"
            value={formData.timeSpend}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Requirement or Prerequisites</label>
          <textarea 
            className="form-control"
            name="requirements"
            rows="4"
            placeholder="Requirements for taking your course"
            value={formData.requirements}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Level</label>
          <select 
            className="form-select"
            name="level"
            value={formData.level}
            onChange={handleChange}
          >
            <option value="">Select Level</option>
            <option value="beginners">Beginners</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-4">
          <h3>Lessons</h3>
          <div className="mb-3">
            <button 
              type="button" 
              className="btn btn-primary me-2"
              onClick={() => handleAddLesson('video')}
            >
              Add Video Lesson
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => handleAddLesson('quiz')}
            >
              Add Quiz
            </button>
          </div>

          {lessons.map((lesson, lessonIndex) => (
            <div key={lessonIndex} className="card mb-4 p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>{lesson.type === 'video' ? 'Video Lesson' : 'Quiz'} #{lessonIndex + 1}</h4>
                <button 
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemoveLesson(lessonIndex)}
                >
                  <i class="bi-x"></i>
                </button>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Lesson Title"
                  value={lesson.title}
                  onChange={(e) => handleLessonChange(lessonIndex, 'title', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  placeholder="Lesson Description"
                  value={lesson.description}
                  onChange={(e) => handleLessonChange(lessonIndex, 'description', e.target.value)}
                />
              </div>

              {lesson.type === 'video' ? (
                <>
                  <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Duration"
                      value={lesson.duration}
                      onChange={(e) => handleLessonChange(lessonIndex, 'duration', e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Order</label>
                    <input 
                      type="number"
                      className="form-control"
                      placeholder="Lesson Order"
                      value={lesson.order}
                      onChange={(e) => handleLessonChange(lessonIndex, 'order', e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Lesson Image</label>
                    <input 
                      type="file"
                      className="form-control"
                      onChange={(e) => handleLessonFileChange(lessonIndex, 'image', e.target.files[0])}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Lesson Video</label>
                    <input 
                      type="file"
                      className="form-control"
                      accept=".mp4"
                      onChange={(e) => handleLessonFileChange(lessonIndex, 'video', e.target.files[0])}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Document URL</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Document URL"
                      value={lesson.document}
                      onChange={(e) => handleLessonChange(lessonIndex, 'document', e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <div className="quiz-section">
                  {lesson.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="card mb-3 p-3">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Question #{questionIndex + 1}</h5>
                        {lesson.questions.length > 1 && (
                          <button 
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveQuestion(lessonIndex, questionIndex)}
                          >
                           <i class="bi-x"></i>
                          </button>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label">Question</label>
                        <input 
                          type="text"
                          className="form-control"
                          placeholder="Enter question"
                          value={question.question}
                          onChange={(e) => handleQuestionChange(lessonIndex, questionIndex, 'question', e.target.value)}
                        />
                      </div>

                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="mb-3">
                          <label className="form-label">Option {optionIndex + 1}</label>
                          <input 
                            type="text"
                            className="form-control"
                            placeholder={`Option ${optionIndex + 1}`}
                            value={option}
                            onChange={(e) => handleQuestionChange(
                              lessonIndex,
                              questionIndex,
                              'options',
                              e.target.value,
                              optionIndex
                            )}
                          />
                        </div>
                      ))}

                      <div className="mb-3">
                        <label className="form-label">Correct Answer</label>
                        <select 
                          className="form-select"
                          value={question.correct_ans}
                          onChange={(e) => handleQuestionChange(
                            lessonIndex,
                            questionIndex,
                            'correct_ans',
                            e.target.value
                          )}
                        >
                          <option value="">Select correct answer</option>
                          {question.options.map((option, idx) => (
                            <option key={idx} value={option}>
                              Option {idx + 1}: {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                  
                  <button 
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleAddQuestion(lessonIndex)}
                  >
                    Add Another Question
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        
        <div className="mb-3">
                    <label className="form-label">Certificate Template</label>
                    <input 
                      type="file"
                      className="form-control"
                    />
                  </div>

        <button type="submit" className="btn btn-success">Submit Course</button>
      </form>
    </div>
  );
};

export default AddCourses;