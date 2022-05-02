import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import axios from 'axios'
import useSWR from 'swr';


const api = axios.create({
  baseURL: 'https://restcountries.com/v2/',
});

function useFetch(url) {
  const { data, error } = useSWR(url, async url => {
      const response = await api.get(url);

      return response.data;
  });

  return { data, error };
}

function App() {
  const { data } = useFetch('all');
  

  let index = Math.floor(Math.random() * 250)

  const [name, setName] = useState('Turkey')
  const [capi, setCapi] = useState('Ankara')
  const [lang, setLang] = useState('Türkish')
  const [popu, setPopu] = useState('82000')
  const [curr, setCurr] = useState('Türkish Lira')
  const [flag, setFlag] = useState('https://media.istockphoto.com/vectors/turkish-flag-correct-proportions-vector-vector-id1053420278?k=20&m=1053420278&s=612x612&w=0&h=dzCVS6ZGsGfKZD4gVFJlTEZUxk3Kq-uKVN5ISBwhryM=')

  const changeCountry = () => {
    setName(data[index].name)
    setCapi(data[index].capital)
    setLang(data[index].languages.map(language=>{
      return language.name.split(' ').join('-')
     // console.log(language.name.split(' ').join('-'));
    }))
    setPopu(data[index].population)
    setCurr(data[index].currencies.map(curr=>curr.name))
    setFlag(data[index].flag)
  }


    
  return (
    <div className="App ">
      <div className='container d-flex justify-content-center'>
        <Card className='w-50 mt-5 shadow-lg p-3 mb-5 bg-body rounded'>
          <CardImg
            alt="Bayrak Img"
            src={flag}
            top=''
            height="200px"
            width='200px'
          />
          <CardBody>
            <CardTitle tag="h5">
              Name: {name}
            </CardTitle>

            <CardText><strong>Capital:</strong> {capi}</CardText>
            <CardText><strong>Languages:</strong> {lang}</CardText>
            <CardText><strong>Population:</strong> {popu}</CardText>
            <CardText><strong>Currencies:</strong>{curr}</CardText>

          </CardBody>
        </Card>
      </div>
      <div>
        <div>
          <Button color="warning" onClick={changeCountry} >
            Random Country
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
