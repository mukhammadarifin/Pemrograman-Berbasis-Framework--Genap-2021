import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component1/BlogPost/Post";


class BlogPost extends Component{
    state = {
        listProduk:[],
        listProduk1:[],
        listProduk2:[],
        insertProduk: {
            id: "",
            namaproduk: "",
            harga: ""
        },
        total: 0
    }

    ambilDataDariServerAPI = async () => {
        await fetch('http://localhost:3002/keranjang')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listProduk: jsonHasilAmbilDariAPI
            })
        })
        this.totalBelanja()
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    ambilDataDariServerAPIBasket() {
        // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        fetch("http://localhost:3002/keranjang") // penambahan sort dan order berdasarkan parameter
          .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data JSON
          .then((jsonHasilAmbilDariAPI) => {
            // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
            this.setState({
              listBasket: jsonHasilAmbilDariAPI,
            });
          });
    
        let total = this.state.listProduk.reduce(function (prev, current) {
          return prev + +current.harga;
        }, 0);
        // console.log(total);
        this.setState({
          sum: total,
        });
        console.log(this.state.sum);
    }

    totalBelanja(){
        var total2 = 0;
        this.state.listProduk.forEach(obj => {
            const map = new Map(Object.entries(obj));
            total2 += parseInt(map.get('harga'));
        });
        this.setState({total: total2});
    }

    render(){
        return(
            <div className="post-artikel">
               
                <h2>Daftar Produk</h2>
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>ID Produk</td>
                            <td>Nama</td>
                            <td>Qty</td>	
                            <td>Sub Total</td>
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.listProduk.map(artikel => {
                        return <Post key={artikel.idProduk} id={artikel.id} namaproduk={artikel.namaproduk} harga={artikel.harga} gambar={artikel.gambar} stock={artikel.stock} qty = {artikel.qty} idArtikel={artikel.id}/>
                    })
                }
                    </tbody>
                    <tbody>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><h2>Total = {this.state.total}</h2></td>
                        
                    </tbody>
                </table> 
               
            </div>    
        )
    }
}

export default BlogPost;