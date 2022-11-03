<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      headerItems: ["Home", "Works", "Blog"],
    }
  },
  created () {
    window.addEventListener('load', this.handleLoad)
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      window.onscroll = () => {
        const header = document.querySelector(".header");
        if (window.pageYOffset > 50) {
          header.classList.add("header_active");
        } else {
          header.classList.remove("header_active");
        }
      }
    },
    handleLoad() {
      window.scrollTo({
        top: 0,
        left: 0, 
        behavior: 'smooth'
      });
    }
  },
}
</script>

<template>
  
  <header class="header">
    <div class="header__wrapper">
      
      <div class="header__logo">
        <a href="/home" class="header__logo-link">
          <img src="/svg/logo_portfolio.svg" alt="portfolio" class="header__logo-pic">
        </a>
      </div>

      <nav class="header__nav">
        <ul class="header__list">
        
          <li class="header__item"
            v-for="item in headerItems"
            :key="item"
          >
            <RouterLink :to="`/${item.toLowerCase()}`" class="header__link">{{ item }}</RouterLink>
          </li>

        </ul>

        <div class="header__nav-close">
          <span class="header__nav-close-line"></span>
          <span class="header__nav-close-line"></span>
        </div>

      </nav>

    </div>
  </header>

</template>

<style scoped>
/* START HEADER */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: .2s linear;
  padding-bottom: 10px;
  z-index: 999;
}

.header_active {
  background: white;
  -webkit-box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.5);
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.5);
}

.header__wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 27px;
  padding: 0 15px;
}

.header__list {
  display: flex;
  flex-wrap: wrap;
}

.header__item {
  margin-right: 33px;
}

.header__item:last-child {
  margin-right: 0;
}

.header__link {
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
  text-decoration: none;
}

.header__link:hover, .header__link:focus, .header__link:active {
  color: burlywood;
}

.router-link-active {
  color: burlywood;
}

.header__burger {
  display: none;
  width: 40px;
  height: 28px;
  position: relative;
}

.burger__line {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #000;
  position: absolute;
  left: 0;
}

.burger__line_first {
  top: 0;
}

.burger__line_second {
  top: 50%;
  transform: translateY(-50%);
}

.burger__line_third {
  bottom: 0;
}
/* END HEADER */

</style>