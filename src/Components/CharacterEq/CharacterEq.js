import {Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import "./characterEq.css"

const CharacterEq = (props) => {

    const placement = 'bottom'
    const {itemList} = props

    const itemSlots = ['helm', 'armour', 'hands', 'boots', 'wep1', 'wep2']


    return (
        <Row className={"itemContainer"}>
            {itemList.map((v, i) => {
               return (
                   <Col>
                           <OverlayTrigger
                               key={placement}
                               placement={placement}
                               overlay={
                                   <Tooltip id={`tooltip-${v}`}>
                                       <Container >
                                           <Row>
                                               <Col><strong>Name:</strong></Col>
                                               <Col>{v.itemDefinition.name ?? "unnamed"}</Col>
                                           </Row>
                                           <Row>
                                               <Col><strong>Type:</strong></Col>
                                               <Col>{v.itemDefinition.itemType ?? "none"}</Col>
                                           </Row>
                                           <Row>
                                               <Col><strong>Rarity:</strong></Col>
                                               <Col>{v.itemDefinition.rarity ?? "normal"}</Col>
                                           </Row>
                                           {Object.entries(v.stats).map(m => {
                                               return (
                                                   <Row>
                                                       <Col><strong>{m[0]}:</strong></Col>
                                                       <Col><span>{m[1]}</span></Col>
                                                   </Row>
                                                   )
                                           })}
                                           <Row>
                                               <Col><strong>Price:</strong></Col>
                                               <Col>{v.priceSell}</Col>
                                           </Row>
                                       </Container>
                                   </Tooltip>
                               }
                           >
                               <div className={`itemsquare eqImg ${v.slotType}`}/>
                           </OverlayTrigger>
                   </Col>

                )
            })}

        </Row>
    );
};

export default CharacterEq;