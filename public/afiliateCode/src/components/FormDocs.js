import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form } from "react-bootstrap";
import FormButtons from "./FormButtons";

export default function FormDocs() {
  const appContext = useContext(AppContext);
  const { handleChange, form, isValid,setForm } = appContext;
  const [filenames, setFilenames] = useState({});
  const handleFile = (type,name) => (e) => {
    
    if (e.target.files[0].type == type) {

      var reader = new FileReader();
      var file = e.target.files[0]

      reader.onload = e => {
            var binaryData = e.target.result;
            var base64String = window.btoa(binaryData);
            var globalPDF = 'data:application/pdf;base64,' + base64String;
            setForm({...form,[name]:globalPDF});
            

      }

    reader.readAsBinaryString(file)
    setFilenames({...filenames, [name]: e.target.files[0].name});

    }else{
      e.target.value = null;
      
    }
  };

  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
  <Form.Label>Anexar RG (no formato JPEG) {form.person_type == 2 ? "do Representante" : ""}</Form.Label>
          <br />
          <Form.File
            name="file"
            id="RG"
            label="Anexar"
            required
            custom
            onChange={handleFile("image/jpeg","imageIdentity")}
          />
          <span className="px-3">{filenames.imageIdentity ? filenames.imageIdentity : "" }</span>
        </Col>
        {form.person_type == 1 && (
        <Col sm={12} md={6}>
          <Form.Label>Anexar CPF (no formato JPEG)</Form.Label>
          <br />
          <Form.File
            name="file"
            id="CPF"
            label="Anexar"
            required
            custom
            onChange={handleFile("image/jpeg","imageCPF")}
          />
          <span className="px-3">{filenames.imageCPF ? filenames.imageCPF : "" }</span>
        </Col> 
        )}

        {form.person_type == 2 && (
        <Col sm={12} md={6}>
          <Form.Label>Anexar contrato social em PDF</Form.Label>
          <br />
          <Form.File
            name="file"
            id="contrato"
            label="Anexar"
            required
            custom
            onChange={handleFile("application/pdf","imagePDF")}
          />
          <span className="px-3">{filenames.imagePDF ? filenames.imagePDF : "" }</span>
        </Col> 
        )}
      </Row>
      <FormButtons />
    </>
  );
}
