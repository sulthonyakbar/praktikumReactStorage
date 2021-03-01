import React, {Component} from "react";  

class Cart extends Component {  
    constructor(){  
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            user: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja
        }

    }  

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        

        // memanggil data user pada localStorage
        let userName = localStorage.getItem("user")

        // kalkulasi total harga
        let totalHarga = 0;
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })

        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }

    componentDidMount(){
        this.initCart()
}


editCart = selectedItem => {
    let tempCart = []
    if(localStorage.getItem("cart") !== null){
        tempCart = JSON.parse(localStorage.getItem("cart"))
    }

    let index = tempCart.findIndex(it => it.isbn === selectedItem.isbn)
    let promptJumlah = window.prompt(`Masukkan jumlah ${selectedItem.judul} yang di beli`,selectedItem.jumlahBeli)
    tempCart[index].jumlahBeli = promptJumlah

    // update localStorage
    localStorage.setItem("cart", JSON.stringify(tempCart))

    // refersh cart
    this.initCart()
}


dropCart = selectedItem => {
    if (window.confirm(`Apakah anda yakin menghapus ${selectedItem.judul} dari cart?`)) {
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }

        let index = tempCart.findIndex(it => it.isbn === selectedItem.isbn)
        tempCart.splice(index, 1)
        
        // update localStorage
        localStorage.setItem("cart", JSON.stringify(tempCart))

        // refersh cart
        this.initCart()
    }
}


       render(){  
            return (  
                <div className="container">
                <div className="card col-12 mt-2">
                    <div className="card-header bg-dark text-white mt-3">
                        <h4>Data Keranjang Belanja</h4>
                    </div>

                    <div className="card-body">
                        <h5 className="text-primary">
                            Nama User: { this.state.user }
                        </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Jumlah</th>
                                    <th>Total</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>

                            <tbody>
                                { this.state.cart.map( (item, index) => (
                                    <tr key={index}>
                                        <td>{item.judul}</td>
                                        <td>Rp {item.harga}</td>
                                        <td>{item.jumlahBeli}</td>
                                        <td>
                                            Rp { item.harga * item.jumlahBeli }
                                        </td>
                                        <td>
                                            <span class="badge rounded-pill bg-primary mr-2 text-white" onClick={ () => this.editCart(item)}>Edit</span>
                                            <span class="badge rounded-pill bg-danger text-white" onClick={() => this.dropCart(item)}>Hapus</span>
                                        </td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>

                        <h4 className="text-danger">
                            Total Harga: Rp {this.state.total}
                        </h4>
                    </div>
                </div>
            </div>

        );  
    }  
}  



export default Cart; 
