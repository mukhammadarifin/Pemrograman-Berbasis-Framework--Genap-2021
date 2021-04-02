import React from "react";

const Post = (props) => {
    return(
            
                <tr>
                    <td className="id">{props.id}</td>
                    <td className="id">{props.id}</td>
                    <td className="namaproduk">{props.namaproduk}</td>
                    <td className="stock">{props.stock}</td>
                    <td className="harga">Rp. {props.harga}</td>
                </tr>
            

        
    )
}

export default Post;