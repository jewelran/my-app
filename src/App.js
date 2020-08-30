import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const productName = ['photoshop', 'ilistrator','filmora',' photoshop Cc'];
  var products=[
    {name:'Phoshop', prise:'$99.99',discription:'photoshop is  the best in the world'},
    {name:'illistrator', prise:'$60.99',discription:'illistator is  the best in the world'},
    {name:'filmora', prise:'$50.99',discription:'filmora is  the best in the world'},
    {name:'Photoshop CC', prise:'$56.99',discription:'Photoshop CC is  the best in the world'},
  ];

  return (
    <div  className="App">
      <header className="App-header">
      <div>
      <Product product= {products[0]}></Product>
      <Product product= {products[1]}></Product>
      <Product product= {products[2]}></Product>
      <Product product= {products[3]}></Product>

      <Personal name ="jewel" job ="web developer" discription= "hi i am jewel rana , fontend developer in fiverr, My experience 5years."></Personal>

      <Personal name ="suhel" job ="Grafix designer" discription= "hi i am suhel rana , fontend developer in fiverr, My experience 5years."></Personal>

      <Personal name ="kamal" job ="video Eiditor"discription= "hi i am kamal , fontend developer in fiverr, My experience 5years."></Personal>

      <Personal name ="jamal" job ="web developer" discription= "hi i am jamal  , fontend developer in fiverr, My experience 5years."></Personal>
       
      </div>
      <div style={{width:'100%', }}>
        <div style={{width:'100%' ,color:'orange',boxShadow:'3px 2px 11px 5px #8e2525', padding:'20px',textAlign:'center',listStyle:'none'}} className="">
            <ul style={{cursor: 'pointer',listStyle:'none'}}>
                {
                  productName.map(productName =><li> {productName}</li>)
                }
            </ul>
        </div>
        <div style={{width:'100%', heigt:'75%',float:'left'}} className="">
                {
                  products.map(product  => <Product product = {product}></Product>)
                }
        </div>
      </div>
      <div className="">
        <Counter></Counter>
      </div>
      <div>
        <Users></Users>
      </div>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
 useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => {
     setUsers(data);
   })
 },[])
  return (
    <div>
      <h2>Dynamic users : {users.length}</h2>

      {
        users.map(user =>
           <div style={{background:'gray'}}>
            {user.name}
            {user.title}
            {user.company.name}
            {user.phone}
           </div>
           )
      }
               
    </div>
   
      
    
  )
}


function Counter(){
  var btn = {
    background:'orange',
    padding:'10px 20px',
    borderRadius:'7px',
    color:'white',
    fontSize:'17px',
    margin:'10px'
  }

  const [count, setCount] = useState(0);
  const handelIncrease = ()  => {
    const newCount = count +1;
    setCount(newCount);
    // setCount(count + 1);
 
  }
  const handelDecress = () => {
    const dicressCount = count - 1;
    setCount(dicressCount)
  }

  return(
    <div>
      <h2>count:{count}</h2>
      <button style={btn} onClick = {handelDecress}>Minus count</button>
      <button style={btn} onClick={handelIncrease}>Add chart</button>
      {/* <button onClick={() => setCount(count - 1)}>Add chart</button> */}
      {/* <button onClick={() => setCount(count + 1)}>Add chart</button> */}
    </div>
  )
}


function Personal(props){
  var PersonlStyle={
    color:'orange',
    backgroundColor:'#282C34',
    padding:'20px',
    borderRadius:'20px',
    margin:'20px',
    width:'200px',
    float:'left',
    boxShadow:'3px 2px 11px 5px #8e2525',
    marginTop:'80px',
    marginLeft:'5%'
  };
    return(
      <div style={PersonlStyle}>
        <h2>Name:{props.name}</h2>
        <h3>Job:{props.job}</h3>
        <h4> discription : {props.discription}</h4>
      </div>
    );
};


function Product(props) {
 var productStyle ={
   backgroundColor:'#282C34',
   width:'20%',
   height:'30%',
   float:"left",
   marginLeft:'3%',
   borderRadius:'10px',
   paddingBottom:'20px',
   textAlign:'left',
   padding:'10px',
   marginTop:'50px',
   boxShadow: '-1px 1px 20px 6px #8e2525'
 }
 var btn={
  backgroundColor:"orange",
  padding:'10px 20px',
  borderRadius:'7px',
  float:'right',
  color:'white',
  fontSize:'15px'
 }
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5 style={{color:'orange'}}>{props.product.prise}</h5>
      <p style={{fontSize:'15px'}}>{props.product.discription}</p>
      <button  style={btn}>buy now</button>
    </div>
  )
}
export default App;
