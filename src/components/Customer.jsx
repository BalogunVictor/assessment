import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'

const Customer = () => {
  return (
    <div>
      <div>
        <div>
          <div className='flex'>
          <h2>What Our Customer Say</h2>
              <div className='flex'>
              <BsArrowLeftCircleFill    size={20}
              style={{color:'#F6B426'}}/>
                <BsArrowRightCircleFill    size={20}
                style={{color:'#091242'}} />
              </div>
            </div>


            <div>
              <div>
                <div>
                  <img src="" alt="" />
                  <div>
                  <h3>Kathleen Smithvv</h3>
                  <p>Fuel Company</p>
                  </div>
                </div>
                <div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Customer