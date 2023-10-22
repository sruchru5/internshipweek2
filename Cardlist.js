// CardList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cardlist = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
        <div className="card" style={{ width: '360px', height: '500px', backgroundColor: '#f0f0f0'}}>
            <img
              src="https://th.bing.com/th/id/R.63f949e420f75c239c3f549b58427f01?rik=JKCSoq1HcQ7BZQ&riu=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fPikachu-On-Pokemon-Ball.jpg&ehk=pUZaChP%2bOID6jsSUcJOETQsH6fqW7wTqi4ghA7jkIyA%3d&risl=&pid=ImgRaw&r=0"
              className="card-img-top"
              alt="Pikachu"
            />
            <div className="card-body">
              <center><h5 className="card-title">Pikachu</h5></center>
             <justify> <p className="card-text">Pikachu is a Pokémon that can project electricity from its body at its targets1. Pikachu can transform, or "evolve," into a Raichu when exposed to a "Thunder Stone"</p></justify>
            </div>
          </div>
        </div>

        <div className="col-md-4">
        <div className="card" style={{ width: '360px', height: '500px', backgroundColor: '#f0f0f0'}}>
            <img
              src="https://th.bing.com/th/id/OIP.NGlTrdvwjAZfFOG0v6IpiwHaG1?pid=ImgDet&rs=1 "
              className="card-img-top"
              alt="Bulbasaur"
              style={{ width: '97%', height: '63%' }}
            />
            <div className="card-body">
             <center> <h5 className="card-title">Bulbasaur</h5></center>
              <justify><p className="card-text">Bulbasaur is the first Pokémon in the National Pokédex. It has a small, dinosaur-like appearance with blue-green skin, red eyes, and pointed, plant-like structures growing on its back.</p></justify>
            </div>
          </div>
        </div>

        <div className="col-md-4">
        <div className="card" style={{ width: '360px', height: '500px', backgroundColor: '#f0f0f0'}}>
            <img
              src="https://img.pokemondb.net/artwork/jigglypuff.jpg "
              className="card-img-top mx-auto d-block"
              alt="Jigglypuff"
              style={{ width: '97%', height: '63%' }}
            />
            <div className="card-body">
            <center>  <h5 className="card-title">Jigglypuff</h5></center>
              <p className="card-text">Jigglypuff is known for its round, balloon-like shape and its ability to sing a lullaby that can put opponents to sleep. It is characterized by its big, expressive eyes and its pink fur. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardlist;
