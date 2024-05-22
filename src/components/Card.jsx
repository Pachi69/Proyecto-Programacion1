import React from 'react'

function Card(props) {
  return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">FLIP CARD</p>
                    
                </div>
                <div class="flip-card-back">
                    <p class="title">Aca iria texto</p>
                    <p>Aca un texto mas chiquito</p>
                </div>
            </div>
        </div>
  )
}

export default Card