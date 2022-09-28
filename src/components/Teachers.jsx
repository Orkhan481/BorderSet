import React from 'react'

const Teachers = () => {
  return (
    <div className='teachers'>
        <div className="teacher-banner">
        <div className="left">
        <i class="fa-solid fa-user"></i>
        <div className="info">
            <h2>Gülşən Umud</h2>
            <p>Müəllim</p>
        </div>
        </div>
        <i class="fa-solid fa-plus"></i>
        </div>

        <div className="teacher-info">
            <h3>Müəllim haqqında məlumat</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum, laborum ducimus repellendus perferendis accusamus labore hic perspiciatis neque blanditiis fuga ut, tempora molestias error vitae totam quis quibusdam eligendi!</p>
            <div className="more">
                <p>Daha çox</p>
                <i class="fa-solid fa-down-long"></i>
            </div>
        </div>

        <div className="success">
            <h3>Kurs Nailiyyətləri</h3>
            <div className="cards">
            <div className="card">
          <i class="fa-sharp fa-solid fa-thumbs-up"></i>
          <p>4/5</p>
          <p>Xal</p>
          </div>

          <div className="card">
          <i class="fa-sharp fa-solid fa-thumbs-up"></i>
          <p>4/5</p>
          <p>Xal</p>
          </div>

          <div className="card">
          <i class="fa-sharp fa-solid fa-thumbs-up"></i>
          <p>4/5</p>
          <p>Xal</p>
          </div>
            </div>
          
        </div>

        <div className="materials">
            <h3>Kursun materialları</h3>
            <div className="material-info">
                <div className="card">
                    <div className="number">1</div>
                    <h4>Sillabus</h4>
                    <i class="fa-solid fa-download"></i>
                </div>

                <div className="card">
                    <div className="number">2</div>
                    <h4>Dərs materialı</h4>
                    <i class="fa-solid fa-plus"></i>
                </div>

                <div className="card">
                    <div className="number">3</div>
                    <h4>Proyekt</h4>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Teachers