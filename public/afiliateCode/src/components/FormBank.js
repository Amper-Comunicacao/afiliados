import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";
import FormButtons from "./FormButtons";

export default function FormBank() {
  const appContext = useContext(AppContext);
  const { form, handleChange, isValid } = appContext;
  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Banco</Form.Label>
          <Form.Control value={form.banco} onChange={handleChange("banco")} as="select">
            <option value="001">001 – Banco do Brasil S.A.</option>
            <option value="033">033 – Banco Santander (Brasil) S.A.</option>
            <option value="104">104 – Caixa Econômica Federal</option>
            <option value="237">237 – Banco Bradesco S.A.</option>
            <option value="341">341 – Banco Itaú S.A.</option>
            <option value="356">356 – Banco Real S.A. (antigo)</option>
            <option value="389">389 – Banco Mercantil do Brasil S.A.</option>
            <option value="399">399 – HSBC Bank Brasil S.A. – Banco Múltiplo</option>
            <option value="422">422 – Banco Safra S.A.</option>
            <option value="453">453 – Banco Rural S.A.</option>
            <option value="633">633 – Banco Rendimento S.A.</option>
            <option value="652">652 – Itaú Unibanco Holding S.A.</option>
            <option value="745">745 – Banco Citibank S.A.</option>
            <option value="246">246 – Banco ABC Brasil S.A.</option>
            <option value="025">025 – Banco Alfa S.A.</option>
            <option value="641">641 – Banco Alvorada S.A.</option>
            <option value="029">029 – Banco Banerj S.A.</option>
            <option value="038">038 – Banco Banestado S.A.</option>
            <option value="000">000 – Banco Bankpar S.A.</option>
            <option value="740">740 – Banco Barclays S.A.</option>
            <option value="107">107 – Banco BBM S.A.</option>
            <option value="031">031 – Banco Beg S.A.</option>
            <option value="096">096 – Banco BM{"&"}F de Serviços de Liquidação e Custódia S.A</option>
            <option value="318">318 – Banco BMG S.A.</option>
            <option value="752">752 – Banco BNP Paribas Brasil S.A.</option>
            <option value="248">248 – Banco Boavista Interatlântico S.A.</option>
            <option value="036">036 – Banco Bradesco BBI S.A.</option>
            <option value="204">204 – Banco Bradesco Cartões S.A.</option>
            <option value="225">225 – Banco Brascan S.A.</option>
            <option value="044">044 – Banco BVA S.A.</option>
            <option value="263">263 – Banco Cacique S.A.</option>
            <option value="473">473 – Banco Caixa Geral – Brasil S.A.</option>
            <option value="222">222 – Banco Calyon Brasil S.A.</option>
            <option value="040">040 – Banco Cargill S.A.</option>
            <option value="215">215 – Banco Comercial e de Investimento Sudameris S.A.</option>
            <option value="756">756 – Banco Cooperativo do Brasil S.A. – BANCOOB</option>
            <option value="748">748 – Banco Cooperativo Sicredi S.A.</option>
            <option value="505">505 – Banco Credit Suisse (Brasil) S.A.</option>
            <option value="229">229 – Banco Cruzeiro do Sul S.A.</option>
            <option value="003">003 – Banco da Amazônia S.A.</option>
            <option value="707">707 – Banco Daycoval S.A.</option>
            <option value="024">024 – Banco de Pernambuco S.A. – BANDEPE</option>
            <option value="456">456 – Banco de Tokyo-Mitsubishi UFJ Brasil S.A.</option>
            <option value="214">214 – Banco Dibens S.A.</option>
            <option value="047">047 – Banco do Estado de Sergipe S.A.</option>
            <option value="037">037 – Banco do Estado do Pará S.A.</option>
            <option value="041">041 – Banco do Estado do Rio Grande do Sul S.A.</option>
            <option value="004">004 – Banco do Nordeste do Brasil S.A.</option>
            <option value="265">265 – Banco Fator S.A.</option>
            <option value="224">224 – Banco Fibra S.A.</option>
            <option value="626">626 – Banco Ficsa S.A.</option>
            <option value="394">394 – Banco Finasa BMC S.A.</option>
            <option value="233">233 – Banco GE Capital S.A.</option>
            <option value="734">734 – Banco Gerdau S.A.</option>
            <option value="612">612 – Banco Guanabara S.A.</option>
            <option value="063">063 – Banco Ibi S.A. Banco Múltiplo</option>
            <option value="604">604 – Banco Industrial do Brasil S.A.</option>
            <option value="320">320 – Banco Industrial e Comercial S.A.</option>
            <option value="653">653 – Banco Indusval S.A.</option>
            <option value="630">630 – Banco Intercap S.A.</option>
            <option value="249">249 – Banco Investcred Unibanco S.A.</option>
            <option value="184">184 – Banco Itaú BBA S.A.</option>
            <option value="479">479 – Banco ItaúBank S.A</option>
            <option value="376">376 – Banco J. P. Morgan S.A.</option>
            <option value="074">074 – Banco J. Safra S.A.</option>
            <option value="217">217 – Banco John Deere S.A.</option>
            <option value="065">065 – Banco Lemon S.A.</option>
            <option value="600">600 – Banco Luso Brasileiro S.A.</option>
            <option value="755">755 – Banco Merrill Lynch de Investimentos S.A.</option>
            <option value="746">746 – Banco Modal S.A.</option>
            <option value="151">151 – Banco Nossa Caixa S.A.</option>
            <option value="045">045 – Banco Opportunity S.A.</option>
            <option value="623">623 – Banco Panamericano S.A.</option>
            <option value="611">611 – Banco Paulista S.A.</option>
            <option value="643">643 – Banco Pine S.A.</option>
            <option value="638">638 – Banco Prosper S.A.</option>
            <option value="747">747 – Banco Rabobank International Brasil S.A.</option>
            <option value="072">072 – Banco Rural Mais S.A.</option>
            <option value="250">250 – Banco Schahin S.A.</option>
            <option value="749">749 – Banco Simples S.A.</option>
            <option value="366">366 – Banco Société Générale Brasil S.A.</option>
            <option value="637">637 – Banco Sofisa S.A.</option>
            <option value="464">464 – Banco Sumitomo Mitsui Brasileiro S.A.</option>
            <option value="634">634 – Banco Triângulo S.A.</option>
            <option value="208">208 – Banco UBS Pactual S.A.</option>
            <option value="655">655 – Banco Votorantim S.A.</option>
            <option value="610">610 – Banco VR S.A.</option>
            <option value="370">370 – Banco WestLB do Brasil S.A.</option>
            <option value="021">021 – BANESTES S.A. Banco do Estado do Espírito Santo</option>
            <option value="719">719 – Banif-Banco Internacional do Funchal (Brasil)S.A.</option>
            <option value="073">073 – BB Banco Popular do Brasil S.A.</option>
            <option value="078">078 – BES Investimento do Brasil S.A.-Banco de Investimento</option>
            <option value="069">069 – BPN Brasil Banco Múltiplo S.A.</option>
            <option value="070">070 – BRB – Banco de Brasília S.A.</option>
            <option value="477">477 – Citibank N.A.</option>
            <option value="487">487 – Deutsche Bank S.A. – Banco Alemão</option>
            <option value="751">751 – Dresdner Bank Brasil S.A. – Banco Múltiplo</option>
            <option value="062">062 – Hipercard Banco Múltiplo S.A.</option>
            <option value="492">492 – ING Bank N.V.</option>
            <option value="488">488 – JPMorgan Chase Bank</option>
            <option value="409">409 – UNIBANCO – União de Bancos Brasileiros S.A.</option>
            <option value="230">230 – Unicard Banco Múltiplo S.A.</option>
          </Form.Control>
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Tipo de conta</Form.Label>
          <Form.Control value={form.tipo_conta} onChange={handleChange("tipo_conta")} as="select">
            <option>Corrente</option>
            <option>Poupança</option>
          </Form.Control>
        </Col>
      </Row>
      <Row className="px-sm-1 px-md-0">
        <Col sm={8} md={4}>
          <Form.Label>Agência</Form.Label>
          <Form.Control value={form.agencia} className={isValid("agencia")} onChange={handleChange("agencia")} required type="text" />
        </Col>
        <Col sm={4} md={2}>
          <Form.Label>Dígito</Form.Label>
          <Form.Control value={form.digito_agencia} className={isValid("digito_agencia")} onChange={handleChange("digito_agencia")} type="text" />
        </Col>
        <Col sm={8} md={4}>
          <Form.Label>Conta</Form.Label>
          <Form.Control value={form.conta} className={isValid("conta")} onChange={handleChange("conta")} required type="text" />
        </Col>
        <Col sm={4} md={2}>
          <Form.Label>Dígito</Form.Label>
          <Form.Control value={form.digito_conta} className={isValid("digito_conta")} onChange={handleChange("digito_conta")} required type="text" />
        </Col>
      </Row>
      <FormButtons />
    </>
  );
}
