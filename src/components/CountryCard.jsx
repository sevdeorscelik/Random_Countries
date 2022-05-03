import { useFetch } from '../services/useFetch'
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

const CountryCard = (props) => {
    

    return(
        <div className='container d-flex justify-content-center'>
        <Card className='w-50 mt-5 shadow-lg p-3 mb-5 bg-body rounded '>
          <CardImg
            alt="Bayrak Img"
            src={props.flag}
            top=''
            height="300px"
            
          />
          <CardBody>
            <CardTitle tag="h5">
              Name: {props.name}
            </CardTitle>

            <CardText><strong>Capital:</strong> {props.capi}</CardText>
            <CardText><strong>Languages:</strong> {props.lang}</CardText>
            <CardText><strong>Population:</strong> {props.popu}</CardText>
            <CardText><strong>Currencies:</strong>{props.curr}</CardText>

          </CardBody>
        </Card>
      </div>
    )
}

export default CountryCard