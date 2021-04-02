import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
        
            <div className="gambar-artikel">
                <p className="gambar-artikel img"><img src = {props.gambar}/></p>
            </div>
            <div className="konten-artikel">
                <div className="kanan">
                    <p className="id">ID : {props.id}</p>
                    <p className="namaproduk">Nama : {props.namaproduk}</p>
                    <p className="harga">Harga : Rp. {props.harga}</p>
                </div>
                <div className="kiri">
                    <p className="stock">Stock : {props.stock}</p>
                    <button className="btn" onClick={() =>props.tambahArtikel(props.idArtikel)}>Tambah</button>
                </div>
            </div>
        </div>
    )
}

export default Post;