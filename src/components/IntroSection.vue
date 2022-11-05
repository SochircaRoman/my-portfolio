<script>
import TechStack from './UI/TechStack.vue';

export default {
  components: {
    TechStack,
  },
  props: {
      skills: {
          type: Array,
          required: true,
      }
  },
  data() {
    return {
      data: {
        title: "Hi, I am Roman, Junior Web Developer",
        text: "Hello! My name is Roman and I am a junior web developer that create new websites and web applications. I work with VueJs framework, I know: HTML, CSS, JS, Node.js, Python, I work in Visual Studio Code, Pycharm.",
      }
    }
  }
}
</script>

<template>

  <section class="intro">
      <div class="wrapper">
        <div class="intro__wrapper">

          <div class="intro__content">
            <h1 class="intro__content-title">{{ data.title }}</h1>
            <p class="intro__content-subtitle">{{ data.text }}</p>
            <button class="intro__content-btn">
              <a href="../../resume/Resume_Roman_Sochirca.pdf" target="_blank" class="intro__content-link">Download Resume</a>
            </button>
          </div>

          <div class="intro__image">
            <img class="intro__image-photo" src="../assets/image_intro.jpg" alt="my image">
          </div>
        </div>
        
        <TechStack
          :skills="skills"
        />

      </div>
    </section>

</template>

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
/* END INTRO */

/* MEDIA START */
@media screen and (max-width: 800px) {
  .intro__wrapper {
    flex-direction: column-reverse;
    align-items: center;
  }

  .intro__content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .intro__content-title {
    text-align: center;
    margin-bottom: 21px;
  }

  .intro__content-subtitle {
    text-align: center;
    margin-bottom: 27px
  }

  .intro__content-btn {
    margin-bottom: 58px;
  }

  .intro__image {
    margin-bottom: 44px;
  }

  .intro {
    padding-top: 100px;
  }
}
/* MEDIA END */
</style>