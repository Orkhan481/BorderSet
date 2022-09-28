import React from 'react'

const Lessons = () => {
  return (
    <div className='lessons'>
        <div className="video">
            <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1664307935/car/pexels-hasib-khorami-1496647_1_jbgoaj.png" alt="Video" />
        </div>
       
<div className="chat-student">
<div className="chat">
        <h3>Canlı Söhbət</h3>
        <div className="card">
            <div className="chat-item">
            <i class="fa-solid fa-user"></i>
            <div className="content">
            <p>Salam</p>
            <p>Men yeni baslamisam</p>
            </div>
            </div>

            <div className="chat-item">
            <div className="content">
            <p>Salam</p>
            <p>Size nece komek ede bilerem?</p>
            </div>
            <i class="fa-solid fa-user"></i>
            </div>

            <div className="input-area">
                <input type="text" />
                <i class="fa-solid fa-message"></i>
            </div>
        </div>
       </div>



       <div className="students">
        <div className="title"><h3>Telebeler</h3><button>Canli<i class="fa-solid fa-eye"></i>45</button></div>
       

        <div className="students-info">
                <div className="card">
                <div className="info">
                    <i class="fa-solid fa-user"></i>
                    <h4>Ayan Esedova</h4>
                    </div>
                    <i class="fa-solid fa-plus"></i>
                </div>

                <div className="card">
                    <div className="info">
                    <i class="fa-solid fa-user"></i>
                    <h4>Rasul Abdullayev</h4>
                    </div>
                    <i class="fa-solid fa-plus"></i>
                </div>

                <div className="card">
                <div className="info">
                    <i class="fa-solid fa-user"></i>
                    <h4>Ruslan Aghayev</h4>
                    </div>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>



       </div>




</div>
       
    </div>
  )
}

export default Lessons