<template>

  <section class="intro">
      <div class="wrapper">
        <div class="intro__wrapper">

          <div class="intro__content">
            <h1 class="intro__content-title">Hi, I am Roman, Junior Web Developer</h1>
            <p class="intro__content-subtitle">
              Hello! My name is Roman and I am a junior web developer that create new websites and web applications. I work with VueJs framework, I know: HTML, CSS, JS, Node.js, Python, I work in Visual Studio Code, Pycharm.
            </p>

            <button class="intro__content-btn">
              <a href="./download/roman_cv.pdf" target="_blank" class="intro__content-link">Download Resume</a>
            </button>
          </div>

          <div class="intro__image">
            <img class="intro__image-photo" src="../assets/image_intro.jpg" alt="My image">
          </div>
        </div>


        <div class="intro__content-tech">
          <h2 class="intro__tech-title">My Tech Stack</h2>
          <div class="intro__tech-content">
            <div class="tech__content-menu">

              <div class="tech__menu-content noselect">
                <span class="tech__menu-line"></span>
                <span class="tech__menu-name">frontend</span>
              </div>
              <div class="tech__menu-content noselect">
                <span class="tech__menu-line"></span>
                <span class="tech__menu-name">backend</span>
              </div>

              <div class="tech__menu-content noselect">
                <span class="tech__menu-line"></span>
                <span class="tech__menu-name">tools</span>
              </div>

            </div>
            <div class="tech__content-skills">

              <span class="skill__wrapper noselect">
                <span><img class="skill__img" src="../../skills/css.png" alt=""></span>
              </span>

              <span class="skill__wrapper noselect">
                <span><img class="skill__img" src="../../skills/node.png" alt=""></span>
              </span>

              <span class="skill__wrapper noselect">
                <span><img class="skill__img" src="../../skills/vuejs.png" alt=""></span>
              </span>

              <span class="skill__wrapper noselect">
                <span><img class="skill__img" src="../../skills/html5.png" alt=""></span>
              </span>

              <span class="skill__wrapper noselect">
                <span><img class="skill__img" src="../../skills/js.png" alt=""></span>
              </span>

            </div>
          </div>
        </div>


      </div>
    </section>

</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style scoped>
/* START INTRO */
.intro {
  padding-top: 228px;
}

.intro__wrapper {
  max-width: 855px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
}

.intro__content-title {
  max-width: 440px;
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  color: #21243D;
  margin-bottom: 40px;
}

.intro__content-subtitle {
  max-width: 497px;
  font-weight: 400;
  line-height: 24px;
  color: #21243D;
  margin-bottom: 38px;
}

.intro__content-btn {
  padding: 9px 20px 15px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  background: #FF6464;
  border: 0;
  border-radius: 2px;
  margin-bottom: 71px;
  cursor: default;
}

.intro__content-link {
  text-decoration: none;
  color: #FFFFFF;
}

.intro__content-link:hover {
  color: burlywood;
}

.intro__image-photo {
  border-radius: 50%;
}



.intro__content-tech{
  margin-bottom: 40px;
}

.intro__tech-title {
  font-weight: 600;
  font-size: 34px;
  line-height: 60px;
  color: #21243D;
  margin-bottom: 20px;
}

.tech__content-menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 20px;
}

.tech__menu-content:hover {
  cursor: pointer;
  transition: 0.2s all;
  background:#b7b3b3;
  border-left: 5px solid #21243D;
}

.tech__menu-line {
  border-left: 1px solid #000000;
  position: absolute;
  height: 60px;
}

.tech__menu-name {
  font-weight: 500;
  font-size: 24px;
  line-height: 60px;
  color: #21243D;
  margin-left: 10px;
}

.tech__content-skills {
  text-align: center;
}

.skill__img {
  width: 60px;
  height: 60px;
  transition: 0.2s all;
}
.skill__img:hover {
  transform: scale(1.1);
}

.skill__wrapper {
  padding: 30px 10px;
  margin-right: 10px;
}
/* END INTRO */
</style>