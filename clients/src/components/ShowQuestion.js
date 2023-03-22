
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
function ShowQuestion() {
  const [item, setItem] = useState([]);
  const [loading, setloading] = useState(true);
  const [allQuestion, setAllQuestion] = useState([]);
  const [allOption, setAllOption] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/post")
      .then((res) => {
        setItem(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(e, question) {
    setAllQuestion((data) => ({ ...data, [`${question}`]: e.target.value }));
  }

  const handleOption = (e, question) => {
    setAllOption((data) => ({ ...data, [`${question}`]: e.target.value }))
  }

  const handleRediret = () => {
    if (allQuestion != "" && allOption !== "") {
      navigate('/review', {
        state: {
          allQuestion,
          allOption
        }
      })
    } else {
      alert("please fill all answer")
    }
  }

  return (
    <>
      <section className="container question-container">
        <Form style={{
          width: "inherit",
          display: "contents"
        }}>
          <h1>All Question</h1>
          {!loading && item ? item.map((item) => (
            <>

              <section className="contents">
                <p>{item.question}</p>
                {

                  item.selectValue == "paragraph" ?
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ marginTop: "20px", width: "100%" }}>
                      <Form.Control as="textarea" placeholder='Type your Answer here' rows={3} name="answee" onChange={(e) => handleChange(e, item.question)} />
                    </Form.Group> :
                    <>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3 checkbox-container">
                          <Form.Check
                            inline
                            label={item.option1}
                            name="group1"
                            value={item.option1}
                            type={type}
                            onChange={(e) => handleOption(e, item.question)}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label={item.option2}
                            value={item.option2}
                            onChange={(e) => handleOption(e, item.question)}
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />

                          <Form.Check
                            inline
                            label={item.option3}
                            value={item.option3}
                            onChange={(e) => handleOption(e, item.question)}
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            inline
                            label={item.option4}
                            value={item.option4}
                            onChange={(e) => handleOption(e, item.question)}
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />

                        </div>
                      ))}
                    </>
                }


              </section>

            </>

          )) : "loading"}
          <Button onClick={handleRediret}>Review my Answer</Button>
        </Form>
      </section>

    </>
  );
}



export default ShowQuestion



