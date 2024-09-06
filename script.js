// Change Main Image Functionality
function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
    document.getElementById('mainImage').style.borderRadius = "50px";

}

// Copy Discount Code
function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied: ' + code);
    });
}

// Sidebar for Rental Plans
function openSidebar() {
    document.getElementById('rentalSidebar').classList.add('active');
    
}

function closeSidebar() {
    document.getElementById('rentalSidebar').classList.remove('active');
}

// Proceed to Checkout (Demo)
function proceedToCheckout() {
    // This is a demo. Here you could add code to add the product to a cart and proceed to the checkout process
    alert("Product added to cart! Proceeding to checkout...");
}



var popup=document.querySelector(".popup")
var signbtn=document.querySelector(".hell");
var closebtn= document.querySelector(".close-btn")

signbtn.addEventListener("click",function(){
    document.body.style.overflow="hidden";
    popup.classList.remove("hidden");
});

closebtn.addEventListener("click",function(){
    document.body.style.overflow="auto";
    popup.classList.add("hidden")
})