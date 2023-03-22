import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import ShowQuestion from './ShowQuestion';
function Question() {
  const [show, setShow] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [question, setQuestion] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();

  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      selectValue,
      question,
      option1: option1 ? option1 : "",
      option2: option2 ? option2 : "",
      option3: option3 ? option3 : "",
      option4: option4 ? option4 : ""
    }

    if (data.question !== "" && data.selectValue !== "") {
      axios
        .post("http://localhost:4000/post", data)
        .then((res) => {

          console.log(res.data.message);
          alert("Question post successfully");
          window.location.href = "/"
        })
        .catch((err) => {
          console.log("Error");
          console.log(err.message);
        });

    } else {
      alert("Please fill required data")
    }

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Question
      </Button>

      <ShowQuestion />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className='dropdown-container'>
              <select onChange={onChange}>
                <option value="">Select your answer format</option>
                <option value="paragraph">Paragraph</option>
                <option value="checkbox">Checkbox</option>
              </select>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" placeholder='Type your Question here' rows={3} onChange={e => setQuestion(e.target.value)} />
            </Form.Group>

            {
              selectValue === "checkbox" ?
                <>
                  <Form.Group className="mb-3 input-container" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Add answer option"
                      onChange={(e) => setOption1(e.target.value)} />
                    <Form.Control type="text" placeholder="Add answer option"
                      onChange={(e) => setOption2(e.target.value)} />
                    <Form.Control type="text" placeholder="Add answer option"
                      onChange={(e) => setOption3(e.target.value)} />
                    <Form.Control type="text" placeholder="Add answer option"
                      onChange={(e) => setOption4(e.target.value)} />
                  </Form.Group>
                </>
                : ""
            }

            <Button type='submit'>Save</Button>

          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Question;



