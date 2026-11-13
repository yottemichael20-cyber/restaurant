    const buttons = 
    document.querySelectorAll(".filter");
    const products =
     document.querySelectorAll(".product");

    buttons.forEach(button => {

        button.addEventListener("click",() => {

            const category = button.dataset.category;

            products.forEach(product => {

                if(category === "all" || 
                    product.dataset.category === category) {

                        product.style.display ="";
                    } else {
                        product.style.display ="none";
                    }
            });

buttons.forEach(btn=> 
btn.classList.remove("active"));

button.classList.add("active");

        });
    });