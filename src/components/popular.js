
import one from "../assets/images/one.jpg"
import Two from "../assets/images/Two.jpg"
import three from "../assets/images/three.jpg"
import four from "../assets/images/four.jpg"




function Popular()
{
    return(
        <div class="popular">
    <h1 class="popular__title">Most Popular</h1>
    <p class="popular__subtitle">Pick the best</p>


    <div class="popular__container">
        <div class="course-card">
            <img src={one} alt="code"/>
            <h3>2023 python master </h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>
    
        <div class="course-card">
            <img src={Two}/>
            <h3>2023 Web development </h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>
    
    
        <div class="course-card">
            <img src={three}/>
            <h3>2023 JAVA master class</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>
    
    
        <div class="course-card">
            <img src={four}/>
            <h3>2023 AI master class</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>

        <div class="course-card">
            <img src={one}/>
            <h3>2023 JAVA master class</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>
       

        <div class="course-card">
            <img src={Two}/>
            <h3>2023 AI master class</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>

        <div class="course-card">
            <img src={three}/>
            <h3>2023 JAVA master class</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>
    
        <div class="course-card">
            <img src={four}/>
            <h3>2023 JAVA master class</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    
        </div>
    




    </div>
</div>

    )
}

export default Popular