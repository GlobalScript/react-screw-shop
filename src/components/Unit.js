

function Unit(){
    return (
        <div className="card-container">
        <div className="product-item">
            <div className="image-field">
            <a href="#" ><img className="card-img" src="https://krepcom.ru/upload/iblock/916/din_934-aluminium.jpg" alt="image"/></a>
            <div className="cart-status">
           <div className="status-ok">
            <h6>3</h6>
            </div>
            </div>
            <div className="cart-bar">
            <button><i className='icon-plus'></i></button>
            <a  href="contact.html"><i className='icon-basket'></i></a>
            <button><i className='icon-minus'></i></button>
        </div>
        </div>
        <div className="product-short">
            <h6>Stainless Steel Hex Head Cap Screw</h6>
        </div>
            <span className="price">&#8372;&nbsp;39</span>	

      </div>
      </div>
    )
}

export default Unit;