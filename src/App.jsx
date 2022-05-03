import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import CountryCard from './components/CountryCard';
import './style/bootstrap.minty.min.css'

import { useFetch } from './services/useFetch'




function App() {
  const { data } = useFetch('all');

  const changeCountry = () => {
    setName(data[index].name)
    setCapi(data[index].capital)
    setLang(data[index].languages.map(language=>{
      return language.name + '-'
     // console.log(language.name.split(' ').join('-'));
    }))
    setPopu(data[index].population)
    setCurr(data[index].currencies.map(curr=>curr.name))
    setFlag(data[index].flag)
}
  
  let index = Math.floor(Math.random() * 250)

  const [name, setName] = useState('Turkey')
  const [capi, setCapi] = useState('Ankara')
  const [lang, setLang] = useState('Türkish')
  const [popu, setPopu] = useState('82000')
  const [curr, setCurr] = useState('Türkish Lira')
  const [flag, setFlag] = useState('https://media.istockphoto.com/vectors/turkish-flag-correct-proportions-vector-vector-id1053420278?k=20&m=1053420278&s=612x612&w=0&h=dzCVS6ZGsGfKZD4gVFJlTEZUxk3Kq-uKVN5ISBwhryM=')

   
  return (
    <div className="App ">
      <CountryCard 
        name={name}
        capi={capi}
        lang={lang}
        popu={popu}
        curr={curr}
        flag={flag}
      />
      
      <Button color="warning" onClick={changeCountry}  >
                Random Country
      </Button>
    </div>
  )
}

export default App
