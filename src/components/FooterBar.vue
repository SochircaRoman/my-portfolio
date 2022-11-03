<script>
import FooterContent from '../data/FooterContent.json';

export default {
  data() {
    return {
      links: FooterContent
    }
  },
}
</script>

<template>

  <footer class="footer">
    <div class="footer__wrapper">

      <div class="footer__content-logo">
        <div
          class="footer__item"
          v-for="link in links"
          :key="link.id"
        >
          <a href="#!" class="footer__item-link">
            <div class="footer_logo">
              <img :src="`/svg/${link.name}.svg`" :alt="link.name" class="footer__logo-pic">
            </div>
          </a>
        </div>

      </div>

      <div class="footer__content-copyright noselect">Copyright ©2022 All rights reserved</div>
    
    </div>
  </footer>

</template>

<style scoped>
/* START FOOTER */
.footer {
  margin-top: 135px;
}

.footer__wrapper {
  max-width: 232px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.footer__content-logo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 26px;
}

.footer__item {
  margin-right: 33px;
}

.footer__item:last-child {
  margin-right: 0;
}

.footer__content-copyright {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 55px;
}
/* END FOOTER */
</style>