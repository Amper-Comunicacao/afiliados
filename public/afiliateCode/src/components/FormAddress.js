import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";
import FormButtons from "./FormButtons";


// function pesquisacep2(valor) {
//   var cep = valor.replace(/\D/g, "");
//   //Verifica se campo cep possui valor informado.
//   if (cep != "") {
//     //Expressão regular para validar o CEP.
//     var validacep = /^[0-9]{8}$/;

//     //Valida o formato do CEP.
//     // if(validacep.test(cep)) {
//     if (true) {
//       // $.getJSON("https://viacep.com.br/ws/" +cep+"/json", function(result) {

//       function getPlace() {
//         $.getJSON(
//           " https://maps.googleapis.com/maps/api/geocode/json?address=" +
//             valor +
//             "&key=AIzaSyBv2aZ2YO_aW4PIEmXoxHgxC8Ps8DB0o-s",
//           function (result) {
//             if (result.status == "ZERO_RESULTS") {
//               try {
//                 $.getJSON(
//                   " https://maps.googleapis.com/maps/api/geocode/json?address=" +
//                     valor +
//                     "CA&key=AIzaSyBv2aZ2YO_aW4PIEmXoxHgxC8Ps8DB0o-s",
//                   function (otherResult) {
//                     return autoCompletePlace(otherResult);
//                   }
//                 );
//               } catch {
//                 console.log("erro");
//               }
//             } else {
//               return autoCompletePlace(result);
//             }
//           }
//         );
//       }

//       function autoCompletePlace(result) {
//         $.getJSON(
//           " https://maps.googleapis.com/maps/api/geocode/json?&address=" +
//             result.results[0].geometry.location.lat +
//             "," +
//             result.results[0].geometry.location.lng +
//             "&key=AIzaSyBv2aZ2YO_aW4PIEmXoxHgxC8Ps8DB0o-s",
//           function (result2) {
//             result2.results[0].address_components.forEach(function (place) {
//               switch (place.types[0]) {
//                 case "route":
//                   document.getElementById("FormControlInput1Address").value =
//                     place.long_name;
//                   $('label[for="FormControlInput1Address"]').addClass(
//                     "label-active"
//                   );
//                   break;

//                 case "administrative_area_level_2":
//                   document.getElementById("FormControlInput1Cidade").value =
//                     place.long_name;
//                   $('label[for="FormControlInput1Cidade"]').addClass(
//                     "label-active"
//                   );
//                   break;

//                 case "locality":
//                   document.getElementById("FormControlInput1Cidade").value =
//                     place.long_name;
//                   $('label[for="FormControlInput1Cidade"]').addClass(
//                     "label-active"
//                   );
//                   break;

//                 case "administrative_area_level_1":
//                   document.getElementById("FormControlInput1Estado").value =
//                     place.long_name;
//                   $('label[for="FormControlInput1Estado"]').addClass(
//                     "label-active"
//                   );
//                   break;

//                 default:
//               }
//             });
//           }
//         );
//       }
//       getPlace();
//     }
//   }
// }

export default function FormBank() {
  const appContext = useContext(AppContext);
  const [cepobj, setCepobj] = useState({
    estado: "",
    cidade: "",
    rua: "",
  });
  const { handleChange, handleValues, form } = appContext;

  const pesquisaCep = async (e) => {
    let cep = e.target.value.replace(/\D/g, "");
    if (cep != "") {
      var response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyBv2aZ2YO_aW4PIEmXoxHgxC8Ps8DB0o-s`
      );
      var json = await response.json();
  
      if (json.results.status == "ZERO_RESULTS") {
        var response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}CA&key=AIzaSyBv2aZ2YO_aW4PIEmXoxHgxC8Ps8DB0o-s`
        );
        var json = await response.json();
      }
      
      var lat = json.results[0].geometry.location.lat;
      var lng = json.results[0].geometry.location.lng;
  
      var response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=AIzaSyBv2aZ2YO_aW4PIEmXoxHgxC8Ps8DB0o-s`
      );
  
      var json = await response.json();
      var infos = json.results[0].address_components;

      var arrinfos =[];
      
      
      for (let i = 0; i < infos.length; i++) {
        
        switch (infos[i].types[0]) {
          case "route":
            arrinfos.push(["rua", infos[i].long_name]);
            break;
  
          case "administrative_area_level_2":
            arrinfos.push(["cidade", infos[i].long_name]);
            break;
  
          case "locality":
            arrinfos.push(["cidade", infos[i].long_name]);
            break;
  
          case "administrative_area_level_1":
            arrinfos.push(["estado", infos[i].short_name]);
            break;
  
          default:
        }

        if (infos[i].types.indexOf("sublocality")>=0) {
          arrinfos.push(["bairro", infos[i].long_name]);
        }
      }

      handleValues(arrinfos);

    }
  };


  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>CEP</Form.Label>
          <Form.Control value={form.cep} onChange={handleChange("cep")} onBlur={pesquisaCep} required type="text" />
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Endereço</Form.Label>
          <Form.Control onChange={handleChange("rua")} value={form.rua} required type="text" />
        </Col>
      </Row>

      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Cidade</Form.Label>
          <Form.Control onChange={handleChange("cidade")} value={form.cidade} required type="text" />
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Bairro</Form.Label>
          <Form.Control onChange={handleChange("bairro")} value={form.bairro} required type="text" />
        </Col>
      </Row>

      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>UF</Form.Label>
          <Form.Control onChange={handleChange("estado")} value={form.estado}  required type="text" />
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Complemento</Form.Label>
          <Form.Control value={form.complemento} onChange={handleChange("complemento")} required type="text" />
        </Col>
      </Row>

      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Número</Form.Label>
          <Form.Control value={form.endereço_numero} onChange={handleChange("endereço_numero")} required type="text" />
        </Col>
      </Row>
      <FormButtons />
    </>
  );
}
