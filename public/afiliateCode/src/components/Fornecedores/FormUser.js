import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { Col, Row, Form } from "react-bootstrap";
import FormButtons from "../FormButtons";

export default function FormUser() {
  const appContext = useContext(AppContext);
  const { handleChange, form, isValid } = appContext;
  // const [filename, setFilename] = useState("");
  // const handleFile = (e) => {
  //   setFilename(e.target.files[0].name);
  // };

  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Eu Sou *</Form.Label>
          <Form.Control
            as="select"
            value={form.person_type}
            onChange={handleChange("person_type")}
          >
            <option value="1">Pessoa física</option>
            <option value="2">Pessoa jurídica</option>
            {/* <option value="3">Tax ID</option> */}
          </Form.Control>
        </Col>
        {/* <Col sm={12} md={6}>
          <Form.Label>
            Nacionalidade{form.person_type != 1 ? " do representante" : ""} *
          </Form.Label>
          <Form.Control
            as="select"
            value={form.estrangeiro}
            onChange={handleChange("estrangeiro")}
          >
            <option value="2">Brasileiro</option>
            <option value="1">Outro</option>
          </Form.Control>
        </Col> */}

        <Col sm={12} md={6}>
          <Form.Label>
            RG {form.person_type == "2" ? "do Representante" : ""} *
          </Form.Label>
          <Form.Control
            required
            type="text"
            value={form.rgCliente}
            className={isValid("rgCliente")}
            onChange={handleChange("rgCliente")}
          />
        </Col>

        {form.person_type == "2" && (
          <Col sm={12} md={6}>
            <Form.Label>CNPJ *</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.cnpj}
              className={isValid("cnpj")}
              onChange={handleChange("cnpj")}
            />
          </Col>
        )}

        {form.person_type == "3" && (
          <Col sm={12} md={6}>
            <Form.Label>Tax ID *</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.taxid}
              className={isValid("taxid")}
              onChange={handleChange("taxid")}
            />
          </Col>
        )}

        {form.person_type == "1" && (
          <>
            <Col sm={12} md={6}>
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.nome}
                onChange={handleChange("nome")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Sobrenome *</Form.Label>
              <Form.Control
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>
                {form.estrangeiro == 2 ? "CPF" : "Passaporte"} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={form.cpf}
                className={isValid("cpf")}
                onChange={handleChange("cpf")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Inscrição Estadual</Form.Label>
              <Form.Control
                value={form.inscEstadualCliente2}
                onChange={handleChange("inscEstadualCliente2")}
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha}
                onChange={handleChange("senha")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Digite sua senha novamente *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha2}
                onChange={handleChange("senha2")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Telefone *</Form.Label>
              <Form.Control
                value={form.telefone}
                onChange={handleChange("telefone")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail *</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                className={isValid("email")}
                required
                type="email"
              />
            </Col>
          </>
        )}

        {form.person_type == "2" && (
          <>
            <Col sm={12} md={6}>
              <Form.Label>Inscrição Municipal</Form.Label>
              <Form.Control
                value={form.inscMunicipalCliente2}
                onChange={handleChange("inscMunicipalCliente2")}
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>
                {form.estrangeiro == 2 ? "CPF" : "Passaporte"} do representante
                *
              </Form.Label>
              <Form.Control
                value={form.cpfUser}
                onChange={handleChange("cpfUser")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                value={form.senha}
                onChange={handleChange("senha")}
                type="password"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Digite sua senha novamente *</Form.Label>
              <Form.Control
                required
                value={form.senha2}
                onChange={handleChange("senha2")}
                type="password"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Nome do representante *</Form.Label>
              <Form.Control
                value={form.nome}
                onChange={handleChange("nome")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Razão Social *</Form.Label>
              <Form.Control
                value={form.razao}
                onChange={handleChange("razao")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Sobrenome do representante *</Form.Label>
              <Form.Control
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail da empresa *</Form.Label>
              <Form.Control
                value={form.emailCnpj}
                onChange={handleChange("emailCnpj")}
                className={isValid("emailCnpj")}
                required
                type="email"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Telefone do Representante *</Form.Label>
              <Form.Control
                value={form.telefone}
                onChange={handleChange("telefone")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail do Representante *</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                className={isValid("email")}
                required
                type="email"
              />
            </Col>
          </>
        )}

        {form.person_type == "3" && (
          <>
            <Col sm={12} md={6}>
              <Form.Label>
                {form.estrangeiro == 2 ? "CPF" : "Passaporte"} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={form.cpf}
                className={isValid("cpf")}
                onChange={handleChange("cpf")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.nome}
                onChange={handleChange("nome")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Sobrenome *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha}
                onChange={handleChange("senha")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Digite sua senha novamente *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha2}
                onChange={handleChange("senha2")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Telefone *</Form.Label>
              <Form.Control
                value={form.telefone}
                onChange={handleChange("telefone")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail *</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                className={isValid("email")}
                required
                type="email"
              />
            </Col>
          </>
        )}

        <Col sm={12} md={6}>
          <Form.Label>Categorias</Form.Label>
          <Form.Control
            value={form.categoria}
            onChange={handleChange("categoria")}
            as="select"
          >
            <option value="1">Atrativos Turísticos</option>
            <option value="2">Agências Concierges e Outros Parceiros</option>
            <option value="3">Restaurantes</option>
            <option value="4">Transportadoras</option>
            <option value="5">Operadoras Turísticas</option>
            <option value="6">Encomendas &amp; Correios</option>
            <option value="7">Guias de Turismo</option>
            <option value="8">MotoGuias</option>
            <option value="9">Eventos</option>
            <option value="10">Bancos e Financeiras</option>
            <option value="11">Associações de Classe</option>
            <option value="12">Combustível Pedagio e Manutenção</option>
            <option value="13">Intermediação Mão de Obra</option>
            <option value="14">Energia Eletrica</option>
            <option value="15">Licensas de Software</option>
            <option value="16">Aluguel de Imóveis</option>
            <option value="17">Aluguel de Automóveis</option>
            <option value="18">Manutenção e Limpeza</option>
            <option value="19">Publicidade e Marketing</option>
            <option value="20">Seguradoras</option>
            <option value="21">Serviços Contabilidade</option>
            <option value="22">Suprimentos de TI</option>
            <option value="23">Telefonia Celular</option>
            <option value="24">Telefonia Fixa</option>
            <option value="25">Equipamentos de TI</option>
            <option value="26">Móveis e Utensílios</option>
            <option value="27">Sócios</option>
            <option value="28">UNIFORMES</option>
            <option value="29">INTERNET</option>
          </Form.Control>
        </Col>
        {/* <Col sm={12} md={6}>
          <Form.Label>Logotipo</Form.Label>
          <br />
          <Form.File
            name="file"
            id="custom-file"
            label="Anexar"
            custom
            onChange={handleFile}
          />
          <span className="px-3">{filename}</span>
        </Col> */}
      </Row>
      <FormButtons />
    </>
  );
}
