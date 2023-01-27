import { Container } from '@mui/system';
import './App.css';
import SearchAppBar from './Component/SearchAppBar/SearchAppBar';
import { db } from './Component/Firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';


function App() {

  const [todo, setTodo] = useState([]);
  const dataCollectionRef = collection(db, "clint-assignment-data");
  const [terGetData, setTergetData] = useState(null);
 

  useEffect(() => {
    // const getData = async ()=>{
    //   const data = await getDocs(dataCollectionRef)

    // }
    // getData ()
    const getData = async () => {
      const data = await getDocs(dataCollectionRef);
      console.log(data); 
      setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     // data.docs.map((doc) =>  console.log(doc) );
    }


    getData()

  }, [dataCollectionRef]);

  const handleTargerData = (data) => {
    
    setTergetData(data);
  }



  return (
    <div className="App">
      <SearchAppBar></SearchAppBar>
      <Container>
        <div className='full-div-container'>
          <div className='left-side-div'>



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

                    <span>Name </span> <span>: {terGetData?.name} </span>
                    <span>Location</span> <span>: {terGetData.location}</span>
                    <span>Date</span><span>: 12 jan 2023</span>
                    <span>Time</span> <span> :
                      <small> {terGetData.time}</small>
                      
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

            <div > <h1 >{terGetData?.name}</h1> </div>

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
                        <p style={{ margin: '0px' }} >ID : {post?.id}</p>
                        <p style={{ marginTop: '15px ' }} >Person detected</p>
                      </div>
                      <div>
                        <p style={{ margin: '0px' }}>


                          {/* {         - new Date(post.Time).getUTCHours() - new Date(post.Time).getUTCMinutes()     } */}

                          <small style={{marginRight:'9px'}}>{post.date}</small>
                          <small>{post.time}</small>
                          {/* <small>{new Date(post.Time).getUTCMinutes()}:</small>
                          <small>{new Date(post.Time).getUTCSeconds()}</small> */}


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
