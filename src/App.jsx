import { Box } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import SearchAppBar from './Component/SearchAppBar/SearchAppBar';
// import { uid } from 'uid';
import { DataSnapshot, onValue, ref, set } from 'firebase/database';
import { db } from './Component/Firebase';
import { useEffect, useState } from 'react';


function App() {

  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
  const [terGetData, setTergetData] = useState(null);
  //console.log(todos[0]?.Sheet1);  
  //  console.log(todos[0].Sheet1); a.Date
  console.log(todo);
  // var d = new Date('2023-01-04T18:15:00.000Z');
  // console.log(d.getUTCHours()); // Hours
  // console.log(d.getUTCMinutes());
  // console.log(d.getUTCSeconds());
  

  //console.log(todo);
  todo?.map(a => {
    // const d = new Date(a.Date);
    // console.log( new Date(a.Date).getUTCHours()); // Hours
    // console.log(d.getUTCMinutes());
    // console.log(d.getUTCSeconds());
  }
  )
  const handleTargerData = (data) => {
    console.log(data);
    setTergetData(data);
  }

  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map(t => {
          // console.log(t.Sheet1)
          const onlyValue = Object.values(t.Sheet1);
          // console.log(onlyValue)
          // setTodos(oldArray => [...oldArray,onlyValue]);
          setTodo(onlyValue);
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <SearchAppBar></SearchAppBar>
      <Container>
        <div className='full-div-container'>
          <div className='left-side-div'>


            {/* <div>

              <h1>{terGetData?.ID} <br /> Persone Detected</h1>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridRow: '35px',
                fontWeight: 700

              }}>

                <span>Name </span> <span>: Sheikh Ali</span>
                <span>Location</span> <span>: Mirpur-13,Dhaka-1216</span>
                <span>Date</span><span>: 12 jan 2023</span>
                <span>Time</span> <span>: 45:50</span>
              </div>



              <h4>Description: <br />
                she is an good girl i dont like him so mutch
              </h4>
            </div> */}
            {
              terGetData ?
                <div>

                  <h1>{terGetData?.ID} <br /> Persone Detected</h1>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridRow: '35px',
                    fontWeight: 700

                  }}>

                    <span>Name </span> <span>: {terGetData.Name} </span>
                    <span>Location</span> <span>: {terGetData.Location}</span>
                    <span>Date</span><span>: 12 jan 2023</span>
                    <span>Time</span> <span> :
                      <small> {new Date(terGetData.Time).getUTCHours()}:</small>
                      <small>{new Date(terGetData.Time).getUTCMinutes()}:</small>
                      <small>{new Date(terGetData.Time).getUTCSeconds()}</small>
                    </span>
                  </div>



                  <h4>Description: <br />
                    {terGetData.Name} detected at {terGetData.Location} on {terGetData.Date}
                  </h4>
                </div>
                :
                <div>

                </div>
            }

          </div>


          <div className='middle-div'>

            <div > <h1 >Female</h1> </div>

            <div className='img-container-div'>
              <img src="https://i.ibb.co/KqGhnTG/demo-image-1-1230x615.jpg" alt="" srcSet="" />
            </div>

          </div>


          <div className='right-side-div'>
            <h1 style={{ margin: '5px' }}>Events</h1>

            <div className='full-details-container'>







              {
                todo?.map(post =>


                  <div onClick={() => handleTargerData(post)} className='details-container'>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between'

                    }}>
                      <div>
                        <p style={{ margin: '0px' }} >ID : {post?.ID}</p>
                        <p style={{ marginTop: '15px ' }} >Person detected</p>
                      </div>
                      <div>
                        <p style={{ margin: '0px' }}>


                          {/* {         - new Date(post.Time).getUTCHours() - new Date(post.Time).getUTCMinutes()     } */}

                          <small>{new Date(post.Time).getUTCHours()}:</small>
                          <small>{new Date(post.Time).getUTCMinutes()}:</small>
                          <small>{new Date(post.Time).getUTCSeconds()}</small>


                        </p>

                      </div>
                    </div>
                  </div>

                )
              }










            </div>




          </div>
        </div>
      </Container >
    </div >
  );
}

export default App;
