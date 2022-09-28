import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>

        <nav>
        <h1 className='logo'>Border Set</h1>
            <ul>
                <li className='link'><h1><i class="fa-solid fa-house"></i>Idarəetmə Paneli</h1> <i class="fa-solid fa-arrow-right"></i></li>
                <li className='link'><h1><i class="fa-solid fa-user"></i>Profil</h1> <i class="fa-solid fa-arrow-right"></i></li>
                <li className='link'><h1><i class="fa-solid fa-table"></i> Cədvəl</h1> <i class="fa-solid fa-arrow-right"></i></li>
                <li className='link'><h1><i class="fa-solid fa-users"></i> Sinif</h1> <i class="fa-solid fa-arrow-right"></i></li>
                <li className='link'><h1><i class="fa-solid fa-star"></i> Nailiyyətlər</h1> <i class="fa-solid fa-arrow-right"></i></li>
                <li className='link'><h1><i class="fa-solid fa-gear"></i> Ayarlar</h1> <i class="fa-solid fa-arrow-right"></i></li>
            </ul>
        </nav>

        <div className="premium">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero numquam, obcaecati quisquam illum eligendi commodi. Id in unde molestias </p>
            <button>Proffesional  səviyyəyə yüksəl</button>
        </div>


    </div>
  )
}

export default Navbar