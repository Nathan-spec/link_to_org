import { Card, CardBody } from "@nextui-org/card";
import styles from './CardComponent.module.css';


const CardComponent = ({ isSelected, onClick, label }) => (
    <Card className="cursor-pointer" onClick={onClick}>
        <CardBody
    </Card>
)