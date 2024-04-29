import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import racao from '../../assets/racao.png'
import carrinho from '../../assets/carrinho2.png'

export const CardComponent = () => {
  return (
    <Card style={{ width: '18rem', marginLeft: "4%"}}>
      <Card.Body style={{alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
        <div style={{marginBottom: '10px'}}>
          <Image
            alt=""
            src={racao}
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
        </div>
        <Card.Title>RAÇÃO SUPRA INICIAL AGRO PARA GALINHA</Card.Title>
        <Card.Text>
          Ração de altíssima qualidade para sua galinha se alimentar muito bem.
        </Card.Text>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
          <Card.Title>R$ 19.95</Card.Title>
          <Card.Link href="/payment">
            <Image
              alt=""
              src={carrinho}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}