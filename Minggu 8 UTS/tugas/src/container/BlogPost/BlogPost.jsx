import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";


class BlogPost extends Component{
    state = {
        listProduk:[],
        listProduk1:[],
        listProduk2:[],
        insertProduk: {
            id: "",
            namaproduk: "",
            harga: "",
            stock: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/barang')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listProduk: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTambahArtikel = (data) =>{
        fetch(`http://localhost:3001/barang/${data}`)
        .then((response) => response.json())
        .then((jsonHasilAmbilDariAPI) => {
            // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
            this.setState({
                listProduk2: jsonHasilAmbilDariAPI,
            });
          })
    }

    handleTombolSimpan = (data) => {
        
        this.handleTambahArtikel(data);
        console.log(this.state.listProduk2);
        

        let InsertArtikel = { ...this.state.insertProduk,};
        let timestamp = new Date().getTime();
        InsertArtikel['id'] = timestamp;
        InsertArtikel['namaproduk'] = this.state.listProduk2['namaproduk'];
        InsertArtikel['harga'] = this.state.listProduk2['harga'];
        InsertArtikel['stock'] = this.state.listProduk2['stock'];
        this.setState({
            insertProduk: InsertArtikel
        })
        if(this.state.insertProduk['namaproduk'] !== "" && this.state.insertProduk['namaproduk'] !== undefined){
        fetch('http://localhost:3002/keranjang',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                this.state.insertProduk
            )
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        })
        } else {
            console.log("retry");
        }
    }

    render(){
        return(
            <div className="post-artikel">
               
                <h2>Daftar Produk</h2>
                {
                    this.state.listProduk.map(artikel => {
                        return <Post key={artikel.idProduk} id={artikel.id} namaproduk={artikel.namaproduk} harga={artikel.harga} gambar={artikel.gambar} stock={artikel.stock} qty = {artikel.qty} idArtikel={artikel.id} tambahArtikel={this.handleTombolSimpan}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;