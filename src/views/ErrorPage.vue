<script>

export default {
  
}

</script>

<template>

  <main>
    <div class="wrapper">
      <div class="error__content">

        <div class="error__content-information">
          <h2 class="error__content-code">404</h2>
          <p class="error__content-line">|</p>
          <p class="error__content-text">Oops! The page you requested could not be found...</p>
        </div>

        <button class="intro__content-btn">
          <a href="/home" class="intro__content-link">Back to home</a>
        </button>

      </div>
    </div>
  </main>

</template>

<style scoped>
.error__content {
  padding-top: 160px;
  text-align: center;
}

.error__content-information {
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
}

.error__content-code {
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  color: #21243D;
}

.error__content-line {
  font-size: 44px;
  line-height: 60px;
  margin: 0 30px;
  color: #000000;
}

.error__content-text {
  font-weight: 600;
  font-size: 25px;
  line-height: 60px;
  color: #000000;
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
</style>
