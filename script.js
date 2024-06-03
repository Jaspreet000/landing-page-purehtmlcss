document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const imageList = document.querySelector(".image-list");
    const cardConts = document.querySelectorAll(".cardcont");
    const modal = document.getElementById("contact-modal");
    const openModalBtn = document.querySelector(".open-modal-btn");
    const closeBtn = document.querySelector(".close-btn");

    const inputFields = document.querySelectorAll('.contact-form input');

    inputFields.forEach(function(input) {
        input.addEventListener('focus', function() {
            const label = this.parentNode.querySelector('.label');
            label.innerHTML = label.innerHTML.replace('*', '');
        });
        
        input.addEventListener('blur', function() {
            const label = this.parentNode.querySelector('.label');
            if (!this.value.trim()) {
                label.innerHTML += '*';
            }
        });
        
        input.addEventListener('input', function() {
            const label = this.parentNode.querySelector('.label');
            if (!this.value.trim()) {
                label.innerHTML += '*';
            } else {
                label.innerHTML = label.innerHTML.replace('*', '');
            }
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            activateDot(index);
            scrollToImage(index);
        });
    });

    imageList.addEventListener("scroll", function () {
        const activeIndex = Math.round(imageList.scrollLeft / (cardConts[0].offsetWidth + 18));
        activateDot(activeIndex);
    });

    function activateDot(index) {
        dots.forEach((dot, i) => {
            const circle1 = dot.querySelector('.circle1');
            if (circle1) {
                circle1.classList.remove('circle1');
                circle1.classList.add('circle2');
            }
            const outer = dot.querySelector('.outer');
            if (outer) {
                outer.remove();
            }

            if (i === index) {
                const clickedCircle = dot.querySelector('.circle2');
                if (clickedCircle) {
                    clickedCircle.classList.remove('circle2');
                    clickedCircle.classList.add('circle1');
                } else {
                    // In case the dot initially has circle1
                    dot.classList.remove('circle2');
                    dot.classList.add('circle1');
                }

                const outerDiv = document.createElement('div');
                outerDiv.classList.add('outer');

                const innerDiv = document.createElement('div');
                innerDiv.classList.add('inner');
                innerDiv.classList.add('circle2');

                outerDiv.appendChild(innerDiv);
                dot.querySelector('.circle1').appendChild(outerDiv);
            }
        });
    }

    function scrollToImage(index) {
        const offset = index * (cardConts[4].offsetWidth + 18); // 18px is the gap
        imageList.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    }


    openModalBtn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
});

function changeImage(imageSrc, clickedElement) {
    // Get all elements with the class 'active'
    var activeElements = document.querySelectorAll('.activee');

    // Remove the 'active' class from all active elements
    activeElements.forEach(function(element) {
        element.classList.remove('activee');
    });

    // Add the 'active' class to the clicked element
    clickedElement.classList.add('activee');

    // Change the main image
    document.getElementById('mainImage').src = imageSrc;
}

