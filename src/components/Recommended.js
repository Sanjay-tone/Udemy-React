
import one from "../assets/images/one.jpg"
import Two from "../assets/images/Two.jpg"
import three from "../assets/images/three.jpg"
import four from "../assets/images/four.jpg"


function Recommended(){
    return(
        <div class="Recommended">
  <h1 class="Recommended__title">Recommended for you</h1>
  <p>Pick the best fit</p>

  <div class="recommended__container">
    <div class="course-card">
        <img src={one} alt="code"/>
        <h3>2023 python master </h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>

    </div>

    <div class="course-card">
        <img src={Two} alt="code"/>
        <h3>2023 Web development </h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>

    </div>


    <div class="course-card">
        <img src={three} alt="code"/>
        <h3>2023 JAVA master class</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>

    </div>


    <div class="course-card">
        <img src={four} alt="code"/>
        <h3>2023 AI master class</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>

    </div>


  </div>
</div>

    )
}

export default Recommended