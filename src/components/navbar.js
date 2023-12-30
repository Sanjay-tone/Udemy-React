

//navbar components

function navbar()
{
    return(
        <div class="navbar">

<div class="navbar__s1">
    <h1 class="navbar__s1__title">Udemy</h1>
</div>

<div class="navbar__s2">
    
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder="Serach for anything here.tech,business,etc....."/>

</div>

<div class="navbar__s3">
<p>COURSES</p>

<div class="mylearning">
    <p>MY LEARNING</p>

    <div class="mylearning__popup">
        <p>You did not purchase anything yet</p>
         </div>
</div>
<i class="fa-solid fa-cart-shopping"></i>
<i class="fa-solid fa-bell"></i>
<i class="fa-solid fa-user"></i>
</div>

<div class="navbar__s4">
    <i class="fa-solid fa-bars"></i>

</div>
</div>
    )
}

export default navbar

