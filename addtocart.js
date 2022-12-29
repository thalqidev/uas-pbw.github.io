const product = [
    {
        id: 0,
        image: 'product-1.png',
        title: 'Nicaragua Coffe',
        price: 250,
    },
    {
        id: 1,
        image: 'product-2.png',
        title: 'Columbia COffe',
        price: 270,
    },
    {
        id: 2,
        image: 'product-3.png',
        title: 'Peru Coffe',
        price: 300,
    }  
 
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price} k</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Masukkan Keranjang</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "KOSONG";
        document.getElementById("total").innerHTML = "Rp "+0+" K";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp "+total+" K";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price} k</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
            );
        }).join('');
    }

    
}